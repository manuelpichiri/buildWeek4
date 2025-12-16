import React from "react";
import { Dropdown } from "react-bootstrap";
import "./style.css";
const SectionOrderPost = () => {
  return (
    <div className="d-flex align-items-center justify-content-end">
        <div className="line-left"></div>
      <p className="small m-0">
        Seleziona la visualizzazione del feed:  </p>
        <Dropdown>
          <Dropdown.Toggle>Più rilevanti per primi</Dropdown.Toggle>
          <Dropdown.Menu align='end'>
            <Dropdown.Item>Più rilevanti per primi</Dropdown.Item>
            <Dropdown.Item>Più recenti per primi</Dropdown.Item>
            <Dropdown.Item className="small text-wrap">
              Questa opzione influirà soltanto sulla visualizzazione del tuo
              feed attuale su questo dispositivo. Puoi modificare la
              visualizzazione predefinita nelle Impostazioni.
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
    
    </div>
  );
};

export default SectionOrderPost;
