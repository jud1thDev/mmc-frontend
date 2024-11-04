import { useNavigate } from "react-router-dom";
import close_circle_button from "../../assets/recordingPage/close-circle-button.svg";

const CloseButton = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/archive")}
      className="flex justify-center cursor-pointer"
    >
      <img src={close_circle_button} alt="close_circle_button" />
    </div>
  );
};
export default CloseButton;
