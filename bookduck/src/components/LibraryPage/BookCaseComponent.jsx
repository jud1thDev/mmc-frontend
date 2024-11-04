import horizontal_menu from "../../assets/common/horizontal-menu-gray.svg";

const BookCaseComponent = ({
  setShowMenuBottomSheet,
  bookCaseTitle = "책장명",
  bookList = [],
}) => {
  return (
    <>
      <div className="p-4 border-[0.0625rem] border-gray-100 rounded-[0.5rem] bg-gray-10">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <div className="flex items-center gap-[0.12rem]">
              <div className="text-b2 text-gray-800">{bookCaseTitle}</div>
              <div className="text-b2 text-orange-400">({bookList.length})</div>
            </div>
            <div
              onClick={() => setShowMenuBottomSheet(true)}
              className="cursor-pointer"
            >
              <img src={horizontal_menu} />
            </div>
          </div>
          <div className="flex gap-2">
            {bookList.map((it, index) => (
              <div key={index} className="w-16 h-23">
                <img src={it.img} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default BookCaseComponent;
