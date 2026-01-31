import { Form, Button } from 'react-bootstrap'
import './RegistrationForm.css'

const RegistrationForm = () => {
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
      >
        <Form.Control
          placeholder='Name'
        />
        <Form.Control
          placeholder='Surname'
        />
        <Form.Control
          placeholder='Email'
        />
        <Form.Control
          placeholder='Password'
        />
        <Button
          className='registration-form-join-btn'
        >
          Join
        </Button>
      </Form>
    </div>
  )
}

export default RegistrationForm