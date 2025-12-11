import { useEffect, useState } from "react";
import "./messages.css";
import { getProfiles } from "../../api/profileApi";
import { UserCircle, MoreHorizontal } from "lucide-react";

export default function MessageList({ onSelectUser, searchQuery = "" }) {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openMenuId, setOpenMenuId] = useState(null);

  useEffect(() => {
    getProfiles()
      .then((data) => {
        setProfiles(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Errore:", err);
        setLoading(false);
      });
  }, []);

  const formatDate = (iso) => {
    if (!iso) return "";
    return new Date(iso).toLocaleDateString("it-IT", {
      day: "2-digit",
      month: "2-digit",
    });
  };

  const filteredProfiles = profiles.filter((p) => {
    const fullName = `${p.name} ${p.surname}`.toLowerCase();
    const title = p.title?.toLowerCase() || "";
    const query = searchQuery.toLowerCase();
    return fullName.includes(query) || title.includes(query);
  });

  const toggleMenu = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  return (
    <div className="message-list">
      {filteredProfiles.length === 0 && (
        <p className="no-results">Nessun risultato</p>
      )}

      {filteredProfiles.map((p) => (
        <div
          key={p._id}
          className="message-item"
          onClick={(e) => {
            if (!e.target.closest(".msg-options-btn")) {
              onSelectUser?.(p);
            }
          }}
        >
          <div className="avatar-wrapper">
            {p.image ? (
              <img
                src={p.image}
                alt=""
                className="avatar"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            ) : (
              <UserCircle size={36} />
            )}
          </div>

          <div className="message-info">
            <div className="top-row">
              <strong className="msg-name">
                {p.name} {p.surname}
              </strong>

              <div className="right-slot">
                {/* DATA */}
                <span className="msg-date">
                  {formatDate(p.updatedAt || p.lastMessageTime)}
                </span>

                <button
                  className="msg-options-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMenu(p._id);
                  }}
                >
                  <MoreHorizontal size={18} />
                </button>

                {openMenuId === p._id && (
                  <div className="msg-dropdown">
                    <button className="dropdown-item">Apri conversazione</button>
                    <button className="dropdown-item">Segna come non letto</button>
                    <button className="dropdown-item">Archivia</button>
                    <button className="dropdown-item danger">Elimina</button>
                  </div>
                )}
              </div>
            </div>

            <p className="subtitle">{p.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
