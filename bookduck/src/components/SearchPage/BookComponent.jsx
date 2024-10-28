import React from "react";

const BookComponent = ({ img, title, writer }) => {
  return (
    <div className="flex flex-col gap-2">
      <img src={img} className="w-[6.5rem] h-[9.25rem]" />
      <div>
        <div>{title}</div>
        {writer && <div>{writer}</div>}
      </div>
    </div>
  );
};

export default BookComponent;
