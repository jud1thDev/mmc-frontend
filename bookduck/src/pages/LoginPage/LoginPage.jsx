import duck from "../../assets/common/duck.svg";
import { KakaoURI } from "../../api/oauth";
const LoginPage = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col h-[34.87rem] bg-gray-50 px-[1.25rem]">
        <img
          src={duck}
          className="w-[12.75rem] h-[12.375rem] mx-auto mt-[10.31rem] mb-[6rem]"
        />
        <div className="text-t1 font-semibold">환영합니다!</div>
        <div className="text-b1">북덕과 함께 책을 읽고 기록을 쌓아보세요</div>
      </div>
      <div className="flex flex-col items-center h-[16.37rem] bg-white">
        <a
          href="#"
          className="flex justify-center items-center w-[22.0625rem] h-[3rem] rounded-[0.5rem] border-solid border-[0.0938rem] border-[#ADADAD] bg-white mt-[1.69rem]"
        >
          Google로 시작하기
        </a>
        <a
          href={KakaoURI}
          className="flex justify-center items-center w-[22.0625rem] h-[3rem] rounded-[0.5rem] bg-[#FEE500] mt-[0.75rem]"
        >
          카카오로 시작하기
        </a>
        <div className="mt-[1.75rem] text-btn4 text-gray-400">
          소셜로그인으로 시작하세요
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
