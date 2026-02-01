import { useState } from "react"

const useExperiences = () => {
  const [experiencesIsLoading, setExperiencesIsLoading] = useState(false)
  const [experiencesData, setExperiencesData] = useState([])
  const [experiencesError, setExperiencesError] = useState(null)

  const URL = import.meta.env.VITE_BASE_SERVER_URL

  const getExperiencesByUserId = async (userId, page, pageSize) => {
    setExperiencesIsLoading(true)
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`${URL}/${userId}/experiences?page=${page}&pageSize=${pageSize}`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })

      if (!response.ok) {
        const errorResponse = await response.json()
        throw new Error(errorResponse.message)
      }

      const data = await response.json()
      setExperiencesData(data)
      return data
    } catch (error) {
      setExperiencesError(error.message)
    } finally {
      setExperiencesIsLoading(false)
    }
  }

  const getLoggedUserExperiences = async () => {
    setExperiencesIsLoading(true)
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`${URL}/me/experiences`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })

      if (!response.ok) {
        const errorResponse = await response.json()
        throw new Error(errorResponse.message)
      }

      const data = await response.json()
      setExperiencesData(data)
      return data
    } catch (error) {
      setExperiencesError(error.message)
    } finally {
      setExperiencesIsLoading(false)
    }
  }

  const createExperience = async (newExperience) => {
    setExperiencesIsLoading(true)
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`${URL}/experiences`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-type": "application/json"
        },
        body: JSON.stringify(newExperience)
      })

      if (!response.ok) {
        const errorResponse = await response.json()
        throw new Error(errorResponse.message)
      }

      const data = await response.json()
      return data
    } catch (error) {
      setExperiencesError(error.message)
    } finally {
      setExperiencesIsLoading(false)
    }
  }

  return {
    experiencesIsLoading,
    experiencesData,
    experiencesError,
    getExperiencesByUserId,
    getLoggedUserExperiences,
    createExperience
  }
}

export default useExperiences