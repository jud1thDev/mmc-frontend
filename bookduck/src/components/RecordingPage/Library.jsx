import { useNavigate } from "react-router-dom";
import BookListView from "../common/BookListView";
import { getTotalBook } from "../../api/library";
import { useQuery } from "@tanstack/react-query";

const Library = () => {
  const navigate = useNavigate();

  const {
    data: bookListData = { bookList: [] },
    isError,
    error,
  } = useQuery({
    queryKey: ["bookListData"],
    queryFn: () => getTotalBook("latest"),
  });

  const handleRecording = () => {
    navigate("/recording");
  };
  return (
    <div className="flex flex-col mx-4">
      {bookListData &&
        bookListData.bookList.map((book) => (
          <BookListView
            edit={false}
            handleOnClick={handleRecording}
            bookTitle={book.title}
            author={book.authors}
            bookImg={book.imgPath}
            rating={book.rating}
          />
        ))}
    </div>
  );
};
export default Library;
