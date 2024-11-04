import { useNavigate } from "react-router-dom";
import BookListView from "../common/BookListView";

const Library = () => {
  const navigate = useNavigate();

  const handleRecording = () => {
    navigate("/recording");
  };
  return (
    <div className="flex flex-col mx-4">
      <BookListView
        edit={true}
        dropdown={true}
        dropdownActive={false}
        handleOnClick={handleRecording}
      />
      <BookListView
        edit={true}
        dropdown={true}
        dropdownActive={false}
        handleOnClick={handleRecording}
      />
      <BookListView
        edit={true}
        dropdown={true}
        dropdownActive={false}
        handleOnClick={handleRecording}
      />
    </div>
  );
};
export default Library;
