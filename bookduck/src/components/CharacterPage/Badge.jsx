import { useState } from "react";
import lock from "../../assets/characterPage/lock.svg";
import BadgeModal from "./BadgeModal";
const Badge = ({ badgeInfo, currentData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleBadgeClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div
      className="flex justify-center items-center w-16 h-16 cursor-pointer"
      onClick={handleBadgeClick}
    >
      {badgeInfo?.isOwned ? (
        <img
          className="w-16 h-16"
          src={`assets/characterPage/badges/${badgeInfo?.badgeType}/${badgeInfo?.badgeName}.png`}
          alt={`${badgeInfo?.badgeName} badge`}
        />
      ) : (
        <div className="flex justify-center items-center bg-gray-50 w-16 h-16 rounded-[100px]">
          <img className="w-5 h-6" src={lock} />
        </div>
      )}
      {isModalOpen && (
        <BadgeModal badge={badgeInfo} currentData={currentData} />
      )}
    </div>
  );
};
export default Badge;
