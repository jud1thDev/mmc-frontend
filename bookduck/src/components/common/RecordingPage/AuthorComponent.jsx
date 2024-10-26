import img_template from "../../../assets/recordingPage/img-template.svg";
const AuthorComponent = () => {
  return (
    <>
      <div className="w-[22.5625rem] px-4 py-[0.62rem] rounded-[0.5rem] bg-gray-50">
        <div className="flex gap-[0.88rem]">
          <div className="w-[3.0625rem] h-[4.375rem]">
            <img src={img_template} alt="img_template" />
          </div>
          <div className="flex flex-col gap-[0.2rem] justify-center">
            <div className="text-b2 text-gray-800 font-semibold">
              안녕하세요
            </div>
            <div className="text-c1 text-gray-500">지은이 / 출판사 / 2024</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AuthorComponent;
