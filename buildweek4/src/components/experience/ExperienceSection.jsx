import { useState, useEffect } from "react";
import AddExperienceModal from "./addExperienceModal";
import { Pencil, Plus, Trash2 } from "lucide-react";
import "./experience.css";
import { Alert, Spinner } from "react-bootstrap";
import DeleteExperienceModal from "./DeleteExperiencemodal";
import EditExperienceModal from "./EditExperienceModal";
import useExperiences from "../../hooks/useExperiences"

const ExperienceSection = () => {

  const [openModal, setOpenModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletingExpId, setDeletingExpId] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingExp, setEditingExp] = useState(null)

  const { getLoggedUserExperiences, createExperience, deleteExperience, updateExperience, experiencesData, experiencesIsLoading, experiencesError, setExperiencesError } = useExperiences()

  useEffect(() => {
    getLoggedUserExperiences()
  }, [])

  const confirmDelete = (expId) => {

    setDeletingExpId(expId);
    setShowDeleteModal(true);

  };

  const handleConfirmDelete = async () => {

    if (deletingExpId) {

      const isDeleted = await deleteExperience(deletingExpId)

      if (isDeleted) {

        setShowDeleteModal(false)
        setDeletingExpId(null)
        getLoggedUserExperiences()

      }
    }
  }

  const handleShowEditModal = (exp) => {

    setShowEditModal(true);
    setEditingExp(exp);
    setError(null);

  }

  const handleCloseEditModal = () => {

    setShowEditModal(false);
    setEditingExp(null);
    setExperiencesError(null);
    getLoggedUserExperiences()

  }

  return (
    <>
      <div className="experience-section">
        <div className="exp-header-top">
          <h3>Esperienza</h3>
          <button className="add-btn" onClick={() => {
            setOpenModal(true)
            setExperiencesError(null)
          }}>
            <Plus size={18} />
          </button>
        </div>

        {experiencesIsLoading &&
          <Spinner
            className="d-block mx-auto"
          />
        }

        {!experiencesIsLoading && experiencesData?.length > 0 && (
          experiencesData.map((exp) => (
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


        {!experiencesIsLoading && experiencesData.length === 0 && !experiencesError && (

          <Alert
            className="bg-light border-secondary"
            dismissible
          >
            <strong>Potresti aggiungere la tua esperienza</strong>
            <p>Ti consigliamo di aggiungere al profilo la tua esperienza lavorativa, così potrai mostrare ai recruiter come metti a frutto le tue competenze.</p></Alert>
        )}

        {!experiencesIsLoading && experiencesData.length === 0 && experiencesError && (
          <Alert
            className="text-center"
            variant="danger"
          >
            {experiencesError}
          </Alert>
        )}

        {openModal && (
          <AddExperienceModal
            onClose={() => {
              setOpenModal(false)
              setExperiencesError(null)
            }}
            addExp={createExperience}
            isLoading={experiencesIsLoading}
            error={experiencesError}
            getExperiences={getLoggedUserExperiences}
          />
        )}
      </div>
      <DeleteExperienceModal
        show={showDeleteModal}
        handleClose={() => {
          setShowDeleteModal(false)
          setDeletingExpId(null)
          setExperiencesError(null)
        }}
        onConfirm={handleConfirmDelete}
        isLoading={experiencesIsLoading}
        error={experiencesError}
        deletingExpId={deletingExpId}
      />
      <EditExperienceModal
        show={showEditModal}
        handleClose={handleCloseEditModal}
        isLoading={experiencesIsLoading}
        error={experiencesError}
        editingExp={editingExp}
        updateExperience={updateExperience}
      />
    </>
  );
};

export default ExperienceSection;
