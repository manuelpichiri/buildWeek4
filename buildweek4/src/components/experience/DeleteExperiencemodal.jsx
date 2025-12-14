import { useState } from "react";
import { Modal, Button, Spinner, Alert } from "react-bootstrap";

const DeleteExperienceModal = ({ show, handleClose, onConfirm, isLoading, error }) => {

  const [hasConfirmed, setHasConfirmed] = useState(false);

  const handleConfirmInternal = () => {
    setHasConfirmed(true);
    onConfirm();
  };

  const handleCloseAndReset = () => {
    setHasConfirmed(false);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleCloseAndReset} centered>
      <Modal.Header className="bg-white" closeButton={!isLoading}>
        <Modal.Title>Elimina esperienza</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Sei sicuro di voler eliminare questa esperienza? Questa azione non può essere annullata.
        {hasConfirmed && error && !isLoading && (
          <Alert variant="danger" className="mt-3 text-center">
            {error}
          </Alert>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="rounded-pill"
          variant="outline-primary" 
          onClick={handleCloseAndReset} 
          disabled={isLoading}
        >
          Annulla
        </Button>
        <Button
          className="rounded-pill"
          variant="primary"
          onClick={handleConfirmInternal}
          disabled={isLoading}
          style={{ minWidth: '100px' }}
        >
          {isLoading ? (
            <>
              <Spinner animation="border" size="sm" className="me-2" />
              Elimino...
            </>
          ) : (
            "Elimina"
          )}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteExperienceModal;
