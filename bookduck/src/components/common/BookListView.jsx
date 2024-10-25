import coverEx from "../../assets/common/book-cover-ex.svg";
import menuBar from "../../assets/common/menu-bar.svg";
import BookListViewDropdown from "./BookListViewDropdown";

const BookListView = ({
  register = true,
  bookTitle = "책제목",
  author = "지은이",
  edit = false,
}) => {
  return (
    <div className="flex items-center justify-between w-[393px] h-[124px] pl-[16px] pr-[16px] pb-[8px] pt-[8px]">
      <div className="flex gap-[12px] items-center w-[252px] h-[108px]">
        <img src={coverEx} alt="coverEx" />
        <div className="flex flex-col gap-1">
          {register && (
            <div className=" text-c1 text-orange-400">직접 등록한 책</div>
          )}
          <div className="text-b1 text-gray-800">{bookTitle}</div>
          <div className=" text-b1 text-gray-500">{author}</div>
        </div>
      </div>
      {edit ? (
        <div className="w-[24px] h-[24px] cursor-pointer">
          <img src={menuBar} alt="menuBar" />
        </div>
      ) : (
        <BookListViewDropdown />
      )}
    </div>
  );
};
export default BookListView;
