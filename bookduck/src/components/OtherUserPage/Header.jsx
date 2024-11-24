import React from "react";
import { useNavigate } from "react-router-dom";
import backIcon from "../../assets/otherUserPage/back.svg";
const Header = ({ name, isFriend = true, handleAddClick }) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between w-full h-[2.75rem] px-4">
      <div className="flex gap-5">
        <button onClick={() => navigate(-1)} className="w-[1rem]">
          <img src={backIcon} />
        </button>
        <span className="text-gray-800 text-st font-semibold">{name}의 홈</span>
      </div>
      {isFriend ? (
        <button className="py-1 px-3 bg-orange-50 rounded-[0.375rem]">
          <span className="text-orange-400  text-btn3">친구삭제</span>
        </button>
      ) : (
        <button
          className="py-1 px-3 bg-blue-400 rounded-[0.375rem]"
          onClick={handleAddClick}
        >
          <span className="text-white  text-btn3">친구추가</span>
        </button>
      )}
    </div>
  );
};

export default Header;
