import { Form, Button, Spinner, Alert } from 'react-bootstrap'
import './RegistrationForm.css'
import { useNavigate } from 'react-router-dom'
import useUsers from '../../hooks/useUsers'
import { useState } from 'react'

const RegistrationForm = () => {

  const [registrationUserForm, setRegistrationUserForm] = useState({
    email: '',
    password: ''
  })

  const { usersIsLoading, usersError, createUser } = useUsers()

  const navigate = useNavigate()

  const registrationFormOnChangeHandler = (e) => {
    const { name, value } = e.target

    setRegistrationUserForm({
      ...registrationUserForm,
      [name]: value
    })
  }

  const onSubmitRegistrationFormHandler = async (e) => {
    e.preventDefault()
    try {
      const result = await createUser(registrationUserForm)
      if (result) {
        navigate('/login', { replace: true })
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div
      className="registration-form-main-container"
    >
      <div
        className='d-flex flex-column gap-2'
      >
        <h2
          className='m-0'
        >
          Join LinkedIn in less than 2 minutes
        </h2>
      </div>
      <Form
        className='w-100 d-flex flex-column gap-3'
        onSubmit={onSubmitRegistrationFormHandler}
      >
        <Form.Control
          name='name'
          type='text'
          placeholder='Name'
          onChange={registrationFormOnChangeHandler}
        />
        <Form.Control
          name='surname'
          type='text'
          placeholder='Surname'
          onChange={registrationFormOnChangeHandler}
        />
        <Form.Control
          name='email'
          type='email'
          placeholder='Email'
          onChange={registrationFormOnChangeHandler}
        />
        <Form.Control
          name='password'
          type='password'
          placeholder='Password'
          onChange={registrationFormOnChangeHandler}
        />
        {usersError && (
          <Alert
            variant='danger'
            className='text-center'
          >
            {usersError}
          </Alert>
        )}
        <Button
          className='registration-form-join-btn'
          type='submit'
          disabled={usersIsLoading}
        >
          {usersIsLoading ? (
            <Spinner 
              size='sm'
            />
          ) : 'Join'}
          
        </Button>
      </Form>
    </div>
  )
}

export default RegistrationForm