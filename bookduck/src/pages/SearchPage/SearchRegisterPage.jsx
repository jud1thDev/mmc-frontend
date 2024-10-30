import React, { useState } from "react";
import StatusBar from "../../components/common/StatusBar";
import Header1 from "../../components/common/Header3";
import DirectRegister from "../../components/RecordingPage/DirectRegister";
const RegisterPage = () => {
  return (
    <div className="w-[24.5625rem]">
      <StatusBar />
      <Header1 title="책 등록하기" />
      <DirectRegister />
    </div>
  );
};

export default RegisterPage;
