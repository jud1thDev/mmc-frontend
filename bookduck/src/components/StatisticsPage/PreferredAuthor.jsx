// import book_cover from "../../assets/common/book-cover.svg";

const PreferredAuthor = ({ author, imgPath }) => {
  // const images = [book_cover, book_cover, book_cover];
  const images = imgPath;
  console.log(images);
  return (
    <div className="flex pl-5 py-7 gap-5">
      {/* 정보가 없으면 정보 부족 문구 띄움  */}
      {author && images ? (
        <>
          <div className="flex flex-col gap-3 text-b1 font-semibold w-[9.4375rem]">
            선호하는 작가예요
            <span className="text-t1 text-orange-400 w-[9.4375rem]">
              {author}
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
        </>
      ) : (
        <div className="flex flex-col gap-5 font-semibold w-full">
          선호하는 작가예요
          <div className="flex justify-center items-center text-btn4 text-center text-gray-400 font-regular w-full h-16">
            북덕이 분석하기에
            <br /> 정보가 부족해요
          </div>
        </div>
      )}
    </div>
  );
};
export default PreferredAuthor;
