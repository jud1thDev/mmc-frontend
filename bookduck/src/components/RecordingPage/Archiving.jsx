import { useNavigate } from "react-router-dom";
import BookListView from "../common/BookListView";
import { useQuery } from "@tanstack/react-query";
import { getSortedTotalBook } from "../../api/library";

const Archiving = () => {
  const navigate = useNavigate();

  const {
    data: sortedBookListData = { bookList: [] },
    isError,
    error,
  } = useQuery({
    queryKey: ["sortedBookListData"],
    queryFn: () => getSortedTotalBook(["READING"], "latest"),
  });

  const handleRecording = () => {
    navigate("/recording");
  };
  return (
    <div className="flex flex-col mx-4">
      {sortedBookListData &&
        sortedBookListData.bookList.map((book) => (
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
export default Archiving;
