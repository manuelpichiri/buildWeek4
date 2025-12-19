import { useState, useEffect } from "react";
import "./messages.css";
import MessageList from "./MessageList";
import NewMessagePanel from "./NewMessagePanel";
import {
  UserCircle,
  ChevronUp,
  MoreHorizontal,
  SquarePen,
  Search,
  SlidersHorizontal,
} from "lucide-react";

const MessageBox = () => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("inEvidenza");
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [newMessageOpen, setNewMessageOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [dockMenuOpen, setDockMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = () => {
      setFilterOpen(false);
      setDockMenuOpen(false);
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <div className={`msg-wrapper ${open ? "open" : ""} d-none d-lg-block`}>

        {dockMenuOpen && (
          <div className="dock-list-panel" onClick={(e) => e.stopPropagation()}>
            <button className="dock-list-item">Gestisci conversazioni</button>
            <button className="dock-list-item">
              Impostazioni messaggistica
            </button>
            <button className="dock-list-item">
              Imposta messaggio di assenza
            </button>
          </div>
        )}

        {open && (
          <div className="msg-body">
            <div className="search-wrapper">
              <Search className="search-icon" size={18} />

              <input
                type="text"
                placeholder="Cerca messaggi"
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />

              <SlidersHorizontal
                className="filter-icon"
                size={18}
                onClick={(e) => {
                  e.stopPropagation();
                  setDockMenuOpen(false);
                  setFilterOpen((prev) => !prev);
                }}
              />
            </div>

            {filterOpen && (
              <div
                className="filter-dropdown"
                onClick={(e) => e.stopPropagation()}
              >
                <button className="filter-item">Da leggere</button>
                <button className="filter-item">Lavoro</button>
                <button className="filter-item">
                  Contrasegnati con una stella
                </button>
                <button className="filter-item">Messaggi InMail</button>
                <button className="filter-item">Collegamenti</button>
                <button className="filter-item">Archiviati</button>
                <button className="filter-item">Posta indesiderata</button>
              </div>
            )}

            <div className="tabs-wrapper">
              <button
                className={`tab-btn ${
                  activeTab === "inEvidenza" ? "active" : ""
                }`}
                onClick={() => setActiveTab("inEvidenza")}
              >
                In evidenza
              </button>

              <button
                className={`tab-btn ${activeTab === "altro" ? "active" : ""}`}
                onClick={() => setActiveTab("altro")}
              >
                Altro
              </button>
            </div>

            {activeTab === "inEvidenza" && (
              <div className="scroll-area">
                <MessageList
                  searchQuery={searchQuery}
                  onSelectUser={(user) => setSelectedUser(user)}
                />
              </div>
            )}

            {activeTab === "altro" && (
              <div className="scroll-area">
                <div className="altro-page">
                  <p className="altro-text">
                    Non ci sono conversazioni in questa sezione.
                  </p>

                  <button
                    className="altro-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setNewMessageOpen(true);
                    }}
                  >
                    Invia un messaggio
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="dock-bar">
          <div className="dock-left">
            <UserCircle size={22} color="black" />
            <span className="dock-title">Messaggistica</span>
          </div>

          <div className="dock-right">
            <button
              className="dock-btn"
              onClick={(e) => {
                e.stopPropagation();
                setFilterOpen(false);
                setDockMenuOpen((prev) => !prev);
              }}
            >
              <MoreHorizontal size={20} color="black" />
            </button>

            <button
              className="dock-btn"
              onClick={(e) => {
                e.stopPropagation();
                setNewMessageOpen(true);
              }}
            >
              <SquarePen size={18} color="black" />
            </button>

            <button
              className="dock-btn"
              onClick={(e) => {
                e.stopPropagation();
                setOpen((prev) => !prev);
                setFilterOpen(false);
                setDockMenuOpen(false);
              }}
            >
              <ChevronUp
                className={open ? "rotated" : ""}
                size={20}
                color="black"
              />
            </button>
          </div>
        </div>
      </div>

      {newMessageOpen && (
        <NewMessagePanel
          onClose={() => setNewMessageOpen(false)}
          onMessageSent={(user) => {
            setSelectedUser(user);
            setOpen(true);
          }}
        />
      )}
    </>
  );
};

export default MessageBox;
