import React from "react";
import emptyImage from "../../assets/recordingPage/rating-empty.svg";
import filledImage from "../../assets/recordingPage/rating-filled.svg";

const BookComponent = ({ img, title, author, rating = 0 }) => {
  console.log(rating);
  return (
    <div className="flex flex-col gap-2 w-[6.5rem] h-fit">
      <img src={img} className="w-full h-[9.25rem]" />
      <div>
        <div>{title}</div>
        {author && <div>{author}</div>}
        {rating !== undefined && rating !== null && (
          <div className="flex gap-[0.12rem]">
            {[...Array(5)].map((_, index) => (
              <div key={index}>
                <img
                  key={index}
                  src={index < rating ? filledImage : emptyImage} // 채워진 이미지 또는 비워진 이미지 표시
                  alt="rating"
                  className="" // 이미지 크기 조절
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookComponent;
