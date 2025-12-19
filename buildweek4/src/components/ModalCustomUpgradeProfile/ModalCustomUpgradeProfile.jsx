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
        <Modal.Header closeButton className="bg-white">
          <Modal.Title>Migliora il tuo profilo e fatti notare</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column align-self-start">
          <p>
            Con Premium, puoi ricevere suggerimenti personalizzati per il
            profilo dall’IA, aggiungere un pulsante personalizzato e presentare
            i dettagli principali nella parte superiore del tuo profilo.
          </p>
          <span>In più, puoi sbloccare tutti i visitatori del profilo!</span>
          <ul className="list-unstyled mt-2">
            <li>
              <img src="/assets/renzi.png" className="img-size-blured" />
              Addetto ai test per il controllo…
            </li>
            <li>
              <img src="/assets/renzi.png" className="img-size-blured" />
              Qualcuno presso SISTEMITALY S.r.l.
            </li>
            <li>
              <img src="/assets/renzi.png" className="img-size-blured" />
              Direttore esecutivo nel settore…
            </li>
          </ul>
          <button className="btn button-moda-upgrade-color align-self-start rounded-pill">
            Prova Premium per 0 EUR
          </button>
          <span className="span-font-size-modal-upgrade">
            1 mese gratis prima di pagare. Puoi annullare in qualsiasi momento.
          </span>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default ModalCustomUpgradeProfile;
