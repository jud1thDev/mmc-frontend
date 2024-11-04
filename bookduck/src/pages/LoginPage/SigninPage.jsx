import React from "react";
import ButtonComponent from "../../components/common/ButtonComponent";
import BottomBackgroundComponent from "../../components/common/BottomBackgroundComponent";
import TextField from "../../components/common/TextField";
import StatusBar from "../../components/common/StatusBar";
const SigninPage = () => {
  const Btn = <ButtonComponent text="완료" type="primary" disabled={true} />;
  return (
    <div className="w-[24.5625rem]">
      <StatusBar />
      <div className="px-4">
        <div className="text-t2 font-semibold mt-6">
          BookDuck과 독서를 시작하기 전에,
          <br /> 이름을 설정해주세요.
        </div>
        <div className="text-b2  mt-7 mb-[2.75rem] text-gray-500">
          이름 짓기가 어렵다면 바로 확인을 눌러 랜덤이름으로 시작하세요.
          <br />
          이름은 언제든 변경할 수 있어요.
        </div>
        <TextField type="제목" placeholder="랜덤닉네임" />
      </div>

      <BottomBackgroundComponent Button={Btn} />
    </div>
  );
};

export default SigninPage;
