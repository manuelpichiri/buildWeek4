import { useState } from "react"

const URL = import.meta.env.VITE_BASE_SERVER_URL

const useAuthentication = () => {
  const [authIsLoading, setAuthIsLoading] = useState(false)
  const [authData, setAuthData] = useState(null)
  const [authError, setAuthError] = useState(null)

  const getProfile = async () => {
    setAuthIsLoading(true)
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`${URL}/me`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })

      if (!response.ok) {
        const errorResponse = await response.json()
        throw new Error(errorResponse.message)
      }

      const data = await response.json()
      setAuthData(data)
      return data
    } catch (error) {
      setAuthError(error.message)
    } finally {
      setAuthIsLoading(false)
    }
  }

  const loginAndGetToken = async (body) => {
    setAuthIsLoading(true)
    try {
      const response = await fetch(`${URL}/login`, {
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(body)
      })

      if (!response.ok) {
        const errorResponse = await response.json()
        throw new Error(errorResponse.message)
      }

      const data = await response.json()
      if (response.status === 200) {
        localStorage.setItem('token', data.token)
        setAuthData(data.token)
      }
      return data
    } catch (error) {
      setAuthError(error.message)
    } finally {
      setAuthIsLoading(false)
    }
  }

  return {
    authIsLoading,
    authData,
    authError,
    getProfile,
    loginAndGetToken
  }
}

export default useAuthentication