import main from "../../assets/common/bottom-nav-main.svg";
import main_active from "../../assets/common/bottom-nav-main-active.svg";
import search from "../../assets/common/bottom-nav-search.svg";
import search_active from "../../assets/common/bottom-nav-search-active.svg";
import record from "../../assets/common/bottom-nav-record.svg";
import record_active from "../../assets/common/bottom-nav-record-active.svg";
import character from "../../assets/common/bottom-nav-character.svg";
import character_active from "../../assets/common/bottom-nav-character-active.svg";
import library from "../../assets/common/bottom-nav-library.svg";
import library_active from "../../assets/common/bottom-nav-library-active.svg";

import { useState } from "react";

const BottomNavbar = () => {
  const [bar, setBar] = useState(0);
  const handleMenu = (index) => {
    setBar(index);
  };
  return (
    <div className="fixed bottom-0 w-[24.5625rem] h-[5.375rem] border-t-[0.3px] border-[#00000030]">
      <div className="flex justify-center items-center gap-[1.89rem] mt-[0.62rem] cursor-pointer">
        <img
          src={bar === 0 ? main_active : main}
          alt="main"
          onClick={() => handleMenu(0)}
        />
        <img
          src={bar === 1 ? search_active : search}
          alt="search"
          onClick={() => handleMenu(1)}
        />
        <img
          src={bar === 2 ? record_active : record}
          alt="record"
          onClick={() => handleMenu(2)}
        />
        <img
          src={bar === 3 ? character_active : character}
          alt="character"
          onClick={() => handleMenu(3)}
        />
        <img
          src={bar === 4 ? library_active : library}
          alt="library"
          onClick={() => handleMenu(4)}
        />
      </div>
    </div>
  );
};
export default BottomNavbar;
