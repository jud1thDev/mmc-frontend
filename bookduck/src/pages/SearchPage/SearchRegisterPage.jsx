import React, { useState } from "react";
import StatusBar from "../../components/common/StatusBar";
import Header3 from "../../components/common/Header3";
const RegisterPage = () => {
  return (
    <div className="w-[24.5625rem]">
      <StatusBar />
      <Header3 title="책 등록하기" edit={false} />
    </div>
  );
};

export default RegisterPage;
