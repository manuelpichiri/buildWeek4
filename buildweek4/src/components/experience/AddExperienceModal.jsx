import { useState } from "react";
import { Modal, Button, Form, Spinner, Alert } from "react-bootstrap";

const AddExperienceModal = ({ onClose, addExp, isLoading, error }) => {

  const [form, setForm] = useState({
    role: "",
    company: "",
    description: "",
    startDate: "",
    endDate: "",
    area: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const formatDate = (date) => {
    if (!date) return null;
    return new Date(date).toISOString().split("T")[0];
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const formattedStartDate = formatDate(form.startDate);
    const formattedEndDate = formatDate(form.endDate);

    const newExperience = {
      ...form,
      startDate: formattedStartDate,
      endDate: formattedEndDate,
    };

    const addedExp = await addExp(newExperience)

    if (addedExp) {
      onClose();
    }

  };

  return (
    <Modal show={true} onHide={onClose} centered size="lg">
      <Modal.Header
        className="bg-white"
        closeButton={!isLoading}>
        <Modal.Title>Aggiungi esperienza</Modal.Title>
      </Modal.Header>

      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}

          <Form.Group className="mb-3">
            <Form.Label>Qualifica</Form.Label>
            <Form.Control
              name="role"
              type="text"
              onChange={handleChange}
              required
              disabled={isLoading}
              placeholder="Es: Front-end Developer"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Azienda o organizzazione</Form.Label>
            <Form.Control
              name="company"
              type="text"
              onChange={handleChange}
              required
              disabled={isLoading}
              placeholder="Es: Nome Azienda"
            />
          </Form.Group>

          <div className="row">
            <div className="col-md-6">
              <Form.Group className="mb-3">
                <Form.Label>Data di inizio</Form.Label>
                <Form.Control
                  name="startDate"
                  type="date"
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group className="mb-3">
                <Form.Label>Data di fine</Form.Label>
                <Form.Control
                  name="endDate"
                  type="date"
                  onChange={handleChange}
                  disabled={isLoading}
                />
              </Form.Group>
            </div>
          </div>

          <Form.Group className="mb-3">
            <Form.Label>Descrizione</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              rows={3}
              onChange={handleChange}
              disabled={isLoading}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Area</Form.Label>
            <Form.Control
              name="area"
              type="text"
              onChange={handleChange}
              disabled={isLoading}
              placeholder="Es: Roma, Italia"
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button
            className="rounded rounded-pill fw-bold"
            variant="primary"
            type="submit"
            disabled={isLoading}>
            {isLoading ? (
              <>
                <Spinner animation="border" size="sm" className="me-2" />
                Salvataggio...
              </>
            ) : (
              "Salva"
            )}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddExperienceModal;

