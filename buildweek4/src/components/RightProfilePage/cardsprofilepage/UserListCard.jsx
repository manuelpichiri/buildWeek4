import "../RightProfilePage.css";
import CardUserItem from "./CardUserItem";
import { FaEye } from "react-icons/fa";

const UserListCard = ({ title, subtitle, items, showMoreLabel }) => {
  return (
    <div className="rp-card">
      <div className="rp-card-header">
        <h3 className="rp-title">{title}</h3>
        <p className="rp-subtitle">
          {title === "Altri profili consultati" ? <FaEye style={{ marginRight: 6 }} /> : null}
          {subtitle}
        </p>
      </div>

      <div className="rp-divider" />

      <div>
        {items.map((item) => (
          <CardUserItem
            key={item.id}
            avatar={item.avatar}
            name={item.name}
            subtitle={item.subtitle}
            actionLabel={item.actionLabel}
            isSquare={item.isSquare}
          />
        ))}
      </div>

      <button className="rp-showmore" type="button">
        {showMoreLabel} →
      </button>
    </div>
  );
};
export default UserListCard;
