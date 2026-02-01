import { useState } from 'react'

const useUsers = () => {
  const [usersIsLoading, setUsersIsLoading] = useState(false)
  const [usersData, setUsersData] = useState([])
  const [usersError, setUsersError] = useState(null)

  const URL = import.meta.env.VITE_BASE_SERVER_URL

  const getUsers = async () => {
    setUsersIsLoading(true)
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`${URL}/profile`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })

      if (!response.ok) {
        const errorResponse = await response.json()
        throw new Error(errorResponse.message)
      }

      const data = await response.json()
      setUsersData(data)
      return data
    } catch (error) {
      setUsersError(error.message)
    } finally {
      setUsersIsLoading(false)
    }
  }

  const createUser = async (newUser) => {
    setUsersIsLoading(true)
    try {
      const response = await fetch(`${URL}/profile`, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(newUser)
      })

      if (!response.ok) {
        const errorResponse = await response.json()
        throw new Error(errorResponse.message)
      }

      const data = await response.json()
      return data
    } catch (error) {
      setUsersError(error.message)
    } finally {
      setUsersIsLoading(false)
    }
  }

  return {
    usersIsLoading,
    usersData,
    usersError,
    getUsers,
    createUser
  }
}

export default useUsers