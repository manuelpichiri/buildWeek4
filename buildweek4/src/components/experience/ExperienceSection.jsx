import { useState, useEffect } from "react";
import AddExperienceModal from "./addExperienceModal";
import { getMyProfile } from "../../api/profileApi";
import { Pencil, Plus, Trash2 } from "lucide-react";
import "./experience.css";
import { useExperiences } from "../hook/useExperiences";
import { Alert, Spinner } from "react-bootstrap";
import DeleteExperienceModal from "./DeleteExperiencemodal";
import EditExperienceModal from "./EditExperienceModal";

const ExperienceSection = () => {

  const [profile, setProfile] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletingExpId, setDeletingExpId] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingExp, setEditingExp] = useState(null)

  const {
    data,
    isLoading,
    error,
    setError,
    deleteExperience,
    addExperience,
    updateExperience,
    fetchData
  } = useExperiences(profile?._id)

  const fetchProfile = async () => {

    try {

      const myProfileData = await getMyProfile();

      setProfile(myProfileData);

    } catch (error) {

      console.log(error)

    }

  }

  useEffect(() => {

    fetchProfile()

  }, [])

  const confirmDelete = (expId) => {

    setDeletingExpId(expId);
    setShowDeleteModal(true);

  };

  const handleConfirmDelete = async () => {

    if (deletingExpId) {

      const isDeleted = await deleteExperience(deletingExpId);

      if (isDeleted) {

        setShowDeleteModal(false);
        setDeletingExpId(null);

      }
    }
  };

  const handleShowEditModal = (exp) => {

    setShowEditModal(true);
    setEditingExp(exp);
    setError(null);

  }

  const handleCloseEditModal = (expId) => {

    setShowEditModal(false);
    setEditingExp(null);
    setError(null);
    fetchData()

  }

  return (
    <>
      <div className="experience-section">
        <div className="exp-header-top">
          <h3>Esperienza</h3>
          <button className="add-btn" onClick={() => {
            setOpenModal(true)
            setError(null)
          }}>
            <Plus size={18} />
          </button>
        </div>

        {isLoading &&
          <Spinner
            className="d-block mx-auto"
          />
        }

        {!isLoading && data?.length > 0 && (
          data.map((exp) => (
            <div className="exp-card" key={exp._id}>
              <div className="exp-info">
                <div
                  className="d-flex align-items-center justify-content-between"
                >
                  <h4>{exp.role}</h4>

                  <div
                    className="d-flex"
                  >
                    <button
                      onClick={() =>
                        handleShowEditModal(exp)
                      }
                      className="edit-experience-btn"
                    >
                      <Pencil
                        size={18}
                      />
                    </button>

                    <button
                      className="delete-experience-btn"
                      onClick={() => confirmDelete(exp._id)}
                    >
                      <Trash2
                        size={18}
                      />
                    </button>

                  </div>
                </div>
                <p className="company">{exp.company}</p>
                <p className="dates">
                  {new Date(exp.startDate).toLocaleDateString()} –{" "}
                  {exp.endDate ? new Date(exp.endDate).toLocaleDateString() : "Presente"}
                </p>
                <p className="desc">{exp.description}</p>
                <p className="exp-area">{exp.area}</p>
              </div>

            </div>
          ))
        )}


        {!isLoading && profile?._id && data.length === 0 && !error && (

          <Alert
            className="bg-light border-secondary"
            dismissible
          >
            <strong>Potresti aggiungere la tua esperienza</strong>
            <p>Ti consigliamo di aggiungere al profilo la tua esperienza lavorativa, così potrai mostrare ai recruiter come metti a frutto le tue competenze.</p></Alert>
        )}

        {!isLoading && data.length === 0 && error && (
          <Alert
            className="text-center"
            variant="danger"
          >
            {error}
          </Alert>
        )}

        {openModal && (
          <AddExperienceModal
            onClose={() => {
              setOpenModal(false)
              setError(null)
            }}
            userId={profile?._id}
            addExp={addExperience}
            isLoading={isLoading}
            error={error}
          />
        )}
      </div>
      <DeleteExperienceModal
        show={showDeleteModal}
        handleClose={() => {
          setShowDeleteModal(false)
          setDeletingExpId(null)
          setError(null)
        }}
        onConfirm={handleConfirmDelete}
        isLoading={isLoading}
        error={error}
        deletingExpId={deletingExpId}
      />
      <EditExperienceModal
        show={showEditModal}
        handleClose={handleCloseEditModal}
        isLoading={isLoading}
        error={error}
        editingExp={editingExp}
        updateExperience={updateExperience}
      />
    </>
  );
};

export default ExperienceSection;
