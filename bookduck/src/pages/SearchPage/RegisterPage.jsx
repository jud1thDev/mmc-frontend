import React, { useState } from "react";
import StatusBar from "../../components/common/StatusBar";
import Header1 from "../../components/common/Header1";
import TextField from "../../components/common/TextField";
import ButtonComponent from "../../components/common/ButtonComponent";
const RegisterPage = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [page, setPage] = useState("");
  const [publisher, setPublisher] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "title":
        setTitle(value);
      case "author":
        setAuthor(value);
      case "page":
        setPage(value);
      case "publisher":
        setPublisher(value);
    }
  };

  return (
    <div className="w-[24.5625rem]">
      <StatusBar />
      <Header1 title="책 등록하기" edit={false} />
      <div className="flex flex-col gap-4 items-center mt-6 px-4">
        <button className="w-[6.25rem] h-[9.25rem] bg-gray-100 text-btn4 text-gray-400 rounded px-3">
          표지 이미지를 추가해주세요
        </button>
        <TextField type="제목" check={false} placeholder="제목" />
        <TextField type="제목" check={false} placeholder="저자" />
        <TextField type="제목" check={false} placeholder="페이지(선택)" />
        <TextField type="제목" check={false} placeholder="출판사(선택)" />
      </div>
      <div className="flex flex-col items-center bg-gray-50 mt-[5.23rem] h-[12.75rem]">
        <div className="w-[15.4375rem] text-b2 text-gray-400 mt-8 mb-[2.31rem] text-center">
          직접 등록한 책에 대해서는 별점 및 한줄평과 독서 기록 모두 나만 남길 수
          있어요.
        </div>
        <ButtonComponent text="등록하기" type="primary" disabled={true} />
      </div>
    </div>
  );
};

export default RegisterPage;
