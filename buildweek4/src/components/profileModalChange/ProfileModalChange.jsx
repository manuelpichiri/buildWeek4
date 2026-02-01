import { useState } from "react";
/* import { getMyProfile, updateProfile } from "../../api/profileApi"; */
import "./style.css";
import { Modal } from "react-bootstrap";
import useAuthentication from "../../hooks/useAuthentication";

const ProfileModalChange = ({ showProfileChanges, toggleModifyModal, authData }) => {
  /* const [profile, setProfile] = useState(null);
  const [isLoadingProfile, setIsLoadingProfile] = useState(false);
  const [errorProfile, setErrorProfile] = useState(""); */

  const { updateProfile } = useAuthentication()

  const loggedUserId = authData._id

  const [profileForm, setProfileForm] = useState({
    name: authData.name || "",
    surname: authData.surname || "",
    jobTitle: authData.jobTitle || "",
    bio: authData.bio || "",
    area: authData.area || "",
    avatar: authData.avatar || "",
  })

  const handleProfileChange = (e) => {
    const { name, value } = e.target;

    setProfileForm({
      ...profileForm,
      [name]: value
    })
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();

    const result = await updateProfile(profileForm, loggedUserId)

    if (result) {
      alert("Profilo aggiornato con successo!");
    }

    /* try {
      const updated = await updateProfile(profileForm);

      setProfile(updated);

      alert("Profilo aggiornato con successo!");
    } catch (err) {
      console.log(err.message);
    } */
  };

  /* const fetchProfile = async () => {
    setIsLoadingProfile(true);

    try {
      const myProfileData = await getMyProfile();

      setProfile(myProfileData);
      setProfileForm(myProfileData);
    } catch (error) {
      setErrorProfile(error.message);
    } finally {
      setIsLoadingProfile(false);
    }
  }; */

  /* useEffect(() => {
    fetchProfile();
  }, []); */

  return (
    <>
      <Modal
        show={showProfileChanges}
        onHide={toggleModifyModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modifica presentazione</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="div-parents">
            <form onSubmit={handleProfileSubmit}>
              <div className="d-flex justify-content-center flex-column div-name-surname">
                <span className="mb-3">* Indica che è obbligatorio</span>

                <label>Nome*</label>
                <input
                  className="input-bar"
                  type="text"
                  name="name"
                  value={profileForm.name}
                  onChange={handleProfileChange}
                />

                <label>Cognome*</label>
                <input
                  type="text"
                  name="surname"
                  value={profileForm.surname}
                  onChange={handleProfileChange}
                />
              </div>
              <div className="d-flex justify-content-center flex-column">
                <h4>Posizione attuale</h4>
                <label>Job Title</label>
                <input
                  type="text"
                  name="jobTitle"
                  value={profileForm.jobTitle}
                  onChange={handleProfileChange}
                />

                <label>Bio:</label>
                <textarea
                  name="bio"
                  value={profileForm.bio}
                  onChange={handleProfileChange}
                ></textarea>
              </div>
              <div className="d-flex justify-content-center flex-column">
                <h4>Località</h4>
                <label>Paese/Area geografica</label>
                <input
                  type="text"
                  name="area"
                  value={profileForm.area}
                  onChange={handleProfileChange}
                />

                <label>Image URL:</label>
                <input
                  type="text"
                  name="avatar"
                  value={profileForm.avatar}
                  onChange={handleProfileChange}
                />
              </div>
              <div
                className="d-flex justify-content-end"
              >
                <button
                  className="btn btn-primary button-save"
                  type="submit"
                >
                  Salva
                </button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProfileModalChange;
