const BASE_URL = "https://striveschool-api.herokuapp.com/api/profile/";

const TOKEN = import.meta.env.VITE_API_TOKEN;

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${TOKEN}`,
};

// GET → lista profili
export const getProfiles = async () => {
  const res = await fetch(BASE_URL, { headers });
  if (!res.ok) throw new Error("Errore nel caricamento profili");
  return res.json();
};

// GET → il tuo profilo
export const getMyProfile = async () => {
  const res = await fetch(BASE_URL + "me", { headers });
  if (!res.ok) throw new Error("Errore nel caricamento del tuo profilo");
  return res.json();
};

// GET → profilo specifico
export const getProfileById = async (userId) => {
  const res = await fetch(BASE_URL + userId, { headers });
  if (!res.ok) throw new Error("Errore nel caricamento profilo utente");
  return res.json();
};

// PUT → modifica il tuo profilo
export const updateProfile = async (updatedProfileData) => {
  try {
    const response = await fetch(BASE_URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify(updatedProfileData),
    });

    if (!response.ok) {
      throw new Error("Errore durante l'aggiornamento del profilo");
    }

    const updatedProfile = await response.json();
    return updatedProfile;
  } catch (error) {
    console.error(error);
    throw error;
  }
};