import { useState } from "react";
import { useNavigate } from "react-router-dom";
import back from "../../assets/CharacterPage/back.svg";
import help from "../../assets/CharacterPage/help-circle.svg";
import BadgeModal from "./BadgeModal";

const BadgeHeader = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div>
      <div className="flex justify-between items-center px-4 py-1 w-[393px] h-[44px]">
        <div className="flex items-center">
          <button className="w-[36px] h-[36px]" onClick={handleBackClick}>
            <img src={back} alt="backIcon" />
          </button>
          <div className="text-st font-semibold">나의 배지</div>{" "}
        </div>
        <div
          className="flex items-center gap-1 text-btn4 text-gray-400 cursor-pointer"
          onClick={toggleModal}
        >
          배지 종류
          <img className="w-4 h-4" src={help} />
        </div>
      </div>
      {isModalOpen && <BadgeModal onClick={toggleModal} />}
    </div>
  );
};
export default BadgeHeader;
