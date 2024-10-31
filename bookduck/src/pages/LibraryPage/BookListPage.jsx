import { useState } from "react";
import down from "../../assets/common/down.svg";

const BookListPage = () => {
  const [sort, setSort] = useState("최신순");
  return (
    <>
      <div className="flex gap-5">
        <div className="">
          <div>{sort}</div>
          <img src={down} alt="down" />
        </div>
        <div></div>
      </div>
    </>
  );
};
export default BookListPage;
