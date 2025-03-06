import React from "react";
import Header1 from "../../components/common/Header3";
import DirectRegister from "../../components/RecordingPage/DirectRegister";
const RegisterPage = () => {
  return (
    <div className="w-full max-w-[64rem]">
      <Header1 title="책 등록하기" />
      <DirectRegister />
    </div>
  );
};

export default RegisterPage;
