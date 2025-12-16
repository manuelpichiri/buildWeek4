// -------> questo sarebbe il primo container Lingua/URL

import { FaPen } from "react-icons/fa";
import "../RightProfilePage.css";

const FirstCard = () => {
  return (
    <div className="rp-card">
      <div className="rp-row">
        <div className="rp-row-body">
          <p className="rp-name title-card-d">
            Lingua del profilo
          </p>
          <span className="text-card-d">Italiano</span>
        </div>
        <div className="rp-actions">
          <button className="rp-edit" type="button">
            <FaPen />
          </button>
        </div>
      </div>

      <div className="rp-divider" />

      <div className="rp-row">
        <div className="rp-row-body">
          <p className="rp-name title-card-d" >
            Profilo pubblico e URL
          </p>
          <p className="rp-desc text-card-d">
            www.linkedin.com/in/angelo-buda-11a537190
          </p>
        </div>
        <div className="rp-actions">
          <button className="rp-edit" type="button">
            <FaPen />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstCard;

