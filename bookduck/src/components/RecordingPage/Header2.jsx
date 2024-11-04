//<-와 ... 만 있는 헤더
import left_arrow from "../../assets/common/left-arrow.svg";
import horizontal_menu from "../../assets/common/horizontal-menu.svg";
import { useNavigate } from "react-router-dom";

const Header2 = ({ handleMenu }) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center h-[2.75rem] my-1">
      <div onClick={() => navigate("/archive")}>
        <img className="cursor-pointer" src={left_arrow} alt="left_arrow" />
      </div>
      <div onClick={handleMenu}>
        <img
          className="cursor-pointer"
          src={horizontal_menu}
          alt="horizontal_menu"
        />
      </div>
    </div>
  );
};
export default Header2;
