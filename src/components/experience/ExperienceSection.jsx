import { useState } from "react";
import ExperienceModal from "./ExperienceModal";
import { Plus } from "lucide-react";
import "./experience.css";

const mockExperiences = [
  {
    _id: "1",
    role: "Frontend Developer",
    company: "EpiBooks",
    startDate: "2024-01-10",
    endDate: null,
    description: "Sviluppo componenti React e gestione dello stato globale.",
  },
  {
    _id: "2",
    role: "UI/UX Designer",
    company: "RealShift Studio",
    startDate: "2023-05-01",
    endDate: "2024-03-01",
    description: "Creazione di grafiche, pattern e mockup digitali.",
  }
];

const ExperienceSection = () => {
  const [experiences, setExperiences] = useState(mockExperiences);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="experience-section">
      <div className="exp-header-top">
        <h3>Esperienza</h3>
        <button className="add-btn" onClick={() => setOpenModal(true)}>
          <Plus size={18} />
        </button>
      </div>

      {experiences.map(exp => (
        <div className="exp-card" key={exp._id}>
          <div className="exp-info">
            <h4>{exp.role}</h4>
            <p className="company">{exp.company}</p>
            <p className="dates">
              {new Date(exp.startDate).toLocaleDateString()} –{" "}
              {exp.endDate ? new Date(exp.endDate).toLocaleDateString() : "Presente"}
            </p>
            <p className="desc">{exp.description}</p>
          </div>
        </div>
      ))}

      {openModal && (
        <ExperienceModal
          onClose={() => setOpenModal(false)}
          setExperiences={setExperiences}
          experiences={experiences}
        />
      )}
    </div>
  );
};

export default ExperienceSection;
