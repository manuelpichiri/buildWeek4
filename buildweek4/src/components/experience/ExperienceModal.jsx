import { useState } from "react";
import { X } from "lucide-react";

const ExperienceModal = ({ onClose, experiences, setExperiences }) => {
  const [form, setForm] = useState({
    role: "",
    company: "",
    description: "",
    startDate: "",
    endDate: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExp = {
      _id: crypto.randomUUID(),
      ...form
    };

    setExperiences([...experiences, newExp]);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <div className="modal-header">
          <h3>Aggiungi esperienza</h3>
          <button onClick={onClose} className="close-btn">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <label>Qualifica</label>
          <input name="role" type="text" onChange={handleChange} />

          <label>Azienda o organizzazione</label>
          <input name="company" type="text" onChange={handleChange} />

          <label>Data di inizio</label>
          <input name="startDate" type="date" onChange={handleChange} />

          <label>Data di fine</label>
          <input name="endDate" type="date" onChange={handleChange} />

          <label>Descrizione</label>
          <textarea name="description" onChange={handleChange}></textarea>


          <button className="exp-btn" type="submit">Aggiungi competenza</button>
          <button className="save-btn" type="submit">Salva</button>
        </form>
      </div>
    </div>
  );
};

export default ExperienceModal;

