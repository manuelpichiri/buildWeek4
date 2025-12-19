import "../RightProfilePage.css";

const UserItem = ({ avatar, name, subtitle, actionLabel, isSquare }) => {
  return (
    <div className="rp-row">
      <img className={`rp-avatar ${isSquare ? "square" : ""}`} src={avatar} alt={name} />
      <div>
        <p className="rp-name">{name}</p>
        <p className="rp-desc">{subtitle}</p>
        <button className="rp-btn" type="button">
          {actionLabel}
        </button>
      </div>
    </div>
  );
};

export default UserItem;
