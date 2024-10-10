import coverEx from "../../assets/common/book-cover-ex.svg";
import menuBar from "../../assets/common/menu-bar.svg";

const BookListView = ({ bookTitle = "책제목", author = "지은이" }) => {
  return (
    <div className="flex items-center justify-between w-[393px] h-[124px] pl-[16px] pr-[16px] pb-[8px] pt=[8px]">
      <div className="flex gap-[12px] items-center w-[252px] h-[108px]">
        <img src={coverEx} alt="coverEx" />
        <div className="flex flex-col">
          <div className="h-[24px] text-c1 text-gray-800">{bookTitle}</div>
          <div className="h-[24px] text-c1 text-gray-500">{author}</div>
        </div>
      </div>
      <div className="w-[24px] h-[24px]">
        <img src={menuBar} alt="menuBar" />
      </div>
    </div>
  );
};
export default BookListView;
