import { useEffect, useState } from "react";
import img_template from "../../assets/recordingPage/img-template.svg";
import TextField from "../common/TextField";
import ButtonComponent from "../common/ButtonComponent";
const DirectRegister = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState("");
  const [publisher, setPublisher] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };
  const handlePages = (e) => {
    setPages(e.target.value);
  };
  const handlePublisher = (e) => {
    setPublisher(e.target.value);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center pb-[2.15rem] mx-4">
        <div>
          <img
            className="mt-[2.77rem] mb-[2rem]"
            src={img_template}
            alt="img-template"
          />
        </div>
        <div className="flex flex-col gap-[2rem] mb-[1.23rem]">
          <TextField
            type="제목"
            title
            placeholder="제목"
            check={false}
            handleValue={handleTitle}
            inputValue={title}
          />
          <TextField
            type="제목"
            title
            placeholder="저자 명"
            check={false}
            handleValue={handleAuthor}
            inputValue={author}
          />
          <TextField
            type="제목"
            title
            placeholder="페이지 수 (선택)"
            check={false}
            handleValue={handlePages}
            inputValue={pages}
          />
          <TextField
            type="제목"
            title
            placeholder="출판사 (선택)"
            check={false}
            handleValue={handlePublisher}
            inputValue={publisher}
          />
        </div>
        <div className="flex justify-center items-center w-[24.5625rem] h-[7rem] mb-[0.94rem] bg-gray-50 text-b2 text-gray-400 text-center">
          직접 등록한 책에 대해서는 별점 및 한줄평과
          <br /> 독서 기록 모두 나만 남길 수 있어요.
        </div>
        <ButtonComponent
          text="완료"
          type="primary"
          disabled={!(title && author)}
        />
      </div>
    </>
  );
};
export default DirectRegister;
