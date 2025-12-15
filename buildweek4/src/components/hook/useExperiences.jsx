import { useEffect, useState } from "react";

const TOKEN = import.meta.env.VITE_API_TOKEN;

export const useExperiences = (userId) => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const url = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`;

  const fetchData = async () => {

    if (!userId) return;
    setIsLoading(true);
    setError(null);

    try {

      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${TOKEN}`
        },
      });

      if (response.ok) {

        const result = await response.json();
        setData(result);

      } else {

        setError("Errore durante il caricamento delle esperienze");

      }

    } catch (error) {

      setError("Errore durante la chiamata API");

    } finally {

      setIsLoading(false);

    }
  }

  const addExperience = async (newExp) => {

    setIsLoading(true);

    try {

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify(newExp),
      });

      if (response.ok) {

        const addedExp = await response.json();
        setData((prev) => [...prev, addedExp]);
        return true;

      }

      setError("Errore durante l'aggiunta dell'esperienza");
      return false

    } catch (error) {

      setError("Errore durante la chiamata API");
      return false;

    } finally {

      setIsLoading(false)

    }
  };

  const updateExperience = async (expId, editExp) => {

    setIsLoading(true);

    try {

      const response = await fetch(`${url}/${expId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify(editExp),
      });

      if (response.ok) {

        const updatedExp = await response.json();
        setData((prev) => prev.map((exp) => (exp._id === expId ? updatedExp : exp)))
        return true;

      }

      setError("Errore durante la modifica");
      return false;

    } catch (error) {

      setError("Errore durante la chiamata API");
      return false;

    } finally {

      setIsLoading(false);

    }

  }

  const deleteExperience = async (expId) => {

    setIsLoading(true);
    setError(null);

    try {

      const response = await fetch(`${url}/${expId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${TOKEN}`
        },
      });

      if (response.ok) {

        setData((prev) => prev.filter((exp) => exp._id !== expId));
        return true;

      }

      setError("Errore durante l'eliminazione");

    } catch (error) {

      setError("Errore durante la chiamata API");
      return false;

    } finally {

      setIsLoading(false);

    }

  }

  useEffect(() => {

    if (userId) {

      fetchData();

    }

  }, [userId]);


  return { data, isLoading, error, setError, addExperience, updateExperience, deleteExperience, fetchData };


};