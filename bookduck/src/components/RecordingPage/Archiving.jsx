import { useNavigate } from "react-router-dom";
import BookListView from "../common/BookListView";

const Archiving = () => {
  const navigate = useNavigate();

  const handleRecording = () => {
    navigate("/recording");
  };
  return (
    <div className="flex flex-col mx-4">
      <BookListView edit={false} handleOnClick={handleRecording} />
      <BookListView edit={false} handleOnClick={handleRecording} />
    </div>
  );
};
export default Archiving;
