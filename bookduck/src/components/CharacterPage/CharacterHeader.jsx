import { useNavigate } from "react-router-dom";
import costumeIcon from "../../assets/CharacterPage/costume.svg";
const CharacterHeader = () => {
  const navigate = useNavigate();

  const handleCustomClick = () => {
    navigate("/character/custom");
  };

  return (
    <div className="flex justify-between items-center px-4 py-1 w-[393px] h-[52px]">
      <div className="text-t2 font-semibold">캐릭터</div>
      <div
        className="flex items-center px-4 py-2 gap-1 bg-orange-50 rounded-[100px] cursor-pointer"
        onClick={handleCustomClick}
      >
        <img className="w-5 h-5" src={costumeIcon} alt="costume Icon" />
        <div className="text-b2 font-semibold text-orange-400">꾸미기</div>
      </div>
    </div>
  );
};
export default CharacterHeader;
