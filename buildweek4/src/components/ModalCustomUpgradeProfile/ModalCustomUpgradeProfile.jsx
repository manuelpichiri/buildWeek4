import "./style.css";
import { useState } from "react";
import { Modal } from "react-bootstrap";
const ModalCustomUpgradeProfile = ({
  showUpgradeModal,
  toggleUpgradeModal,
}) => {
  return (
    <>
      <Modal
        show={showUpgradeModal}
        onHide={toggleUpgradeModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Migliora il tuo profilo e fatti notare</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Con Premium, puoi ricevere suggerimenti personalizzati per il
            profilo dall’IA, aggiungere un pulsante personalizzato e presentare
            i dettagli principali nella parte superiore del tuo profilo.
          </p>
          <span>In più, puoi sbloccare tutti i visitatori del profilo!</span>
          <ul>
            <li>
              <img />
              Addetto ai test per il controllo…
            </li>
            <li>
              <img />
              Qualcuno presso SISTEMITALY S.r.l.
            </li>
            <li>
              <img />
              Direttore esecutivo nel settore…
            </li>
          </ul>
          <button>Prova Premium per 0 EUR</button>
          <span>
            1 mese gratis prima di pagare. Puoi annullare in qualsiasi momento.
          </span>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default ModalCustomUpgradeProfile;
