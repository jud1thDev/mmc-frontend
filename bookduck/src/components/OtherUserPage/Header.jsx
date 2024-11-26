import React from "react";
import { useNavigate } from "react-router-dom";
import backIcon from "../../assets/otherUserPage/back.svg";
const Header = ({ isFriend = true, handleAddClick }) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between w-full h-[2.75rem] px-4">
      <button onClick={() => navigate(-1)} className="w-[1rem]">
        <img src={backIcon} />
      </button>
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
