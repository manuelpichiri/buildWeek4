import { useState } from "react";
import { Modal } from "react-bootstrap";
import "./style.css";
import { ChevronDown, ChevronUp } from "lucide-react";
const ModalCustom = ({ show, toggleModal }) => {
  const [openSection, setOpenSection] = useState("");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section); //se la sezione aperta è quella selezionata chiudi, altrimenti apri
  };

  console.log(openSection);
  return (
    <>
      <Modal
        show={show}
        onHide={toggleModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi al profilo</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-between">
          Sezioni principali{" "}
          <button
            className="button-icon"
            onClick={() => {
              toggleSection("principali");
            }}
          >
            {openSection === "principali" ? (
              <ChevronUp color="#4d4c4ce8" />
            ) : (
              <ChevronDown color="#4d4c4ce8" />
            )}
          </button>
        </Modal.Body>
        {openSection === "principali" && (
          <Modal.Body>prova principali</Modal.Body>
        )}
        <Modal.Body className="d-flex justify-content-between">
          Sezioni consigliate{" "}
          <button
            className="button-icon"
            onClick={() => {
              toggleSection("consigliate");
            }}
          >
            {openSection === "consigliate" ? (
              <ChevronUp color="#4d4c4ce8" />
            ) : (
              <ChevronDown color="#4d4c4ce8" />
            )}
          </button>
        </Modal.Body>
        {openSection === "consigliate" && <Modal.Body>a</Modal.Body>}
        <Modal.Body className="d-flex justify-content-between">
          Altro{" "}
          <button
            className="button-icon"
            onClick={() => {
              toggleSection("altro");
            }}
          >
            {openSection === "consigliate" ? (
              <ChevronUp color="#4d4c4ce8" />
            ) : (
              <ChevronDown color="#4d4c4ce8" />
            )}
          </button>
        </Modal.Body>
        {openSection === "altro" && <Modal.Body>a</Modal.Body>}
      </Modal>
    </>
  );
};

export default ModalCustom;
