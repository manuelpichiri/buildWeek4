import { useState, useEffect } from "react";
import { Modal, Button, Form, Spinner, Alert } from "react-bootstrap";

const EditExperienceModal = ({
  show,
  handleClose,
  isLoading,
  error,
  editingExp,
  updateExperience
}) => {

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
    if (!date) return "";
    return new Date(date).toISOString().split("T")[0];
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const newEditingExp = {
      ...form,
      startDate: form.startDate,
      endDate: form.endDate,
    };

    const editedExp = await updateExperience(editingExp._id, newEditingExp)

    if (editedExp) {
      handleClose();
    }

  };

  useEffect(() => {

    if (editingExp) {

      setForm({
        role: editingExp.role,
        company: editingExp.company,
        description: editingExp.description,
        area: editingExp.area,
        startDate: formatDate(editingExp.startDate),
        endDate: editingExp.endDate ? formatDate(editingExp.endDate) : ""
      })

    }

  }, [editingExp])

  return (

    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header
        className="bg-white"
        closeButton={!isLoading}>
        <Modal.Title>Modifica esperienza</Modal.Title>
      </Modal.Header>

      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}

          <Form.Group className="mb-3">
            <Form.Label>Qualifica</Form.Label>
            <Form.Control
              name="role"
              type="text"
              value={form.role}
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
              value={form.company}
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
                  value={form.startDate}
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
                  value={form.endDate}
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
              value={form.description}
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
              value={form.area}
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

}

export default EditExperienceModal