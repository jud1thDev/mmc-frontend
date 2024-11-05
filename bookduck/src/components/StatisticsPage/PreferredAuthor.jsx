import book_cover from "../../assets/common/book-cover.png";

const PreferredAuthor = () => {
  const images = [book_cover, book_cover, book_cover];
  return (
    <div className="flex pl-5 py-7 gap-5">
      <div className="flex flex-col gap-3 text-b1 font-semibold w-[9.4375rem]">
        선호하는 작가예요
        <span className="text-t1 text-orange-400 w-[9.4375rem]">
          어스트 허밍웨이
        </span>
      </div>
      <div className="flex gap-1.5 overflow-scroll">
        {images.map((cover, index) => (
          <img
            key={index}
            className="w-[5.125rem] h-[6.9375rem] rounded-md"
            src={cover}
            alt={`book-cover-${index}`}
          />
        ))}
      </div>
    </div>
  );
};
export default PreferredAuthor;
