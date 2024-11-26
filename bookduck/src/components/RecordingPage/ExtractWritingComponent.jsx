import camera from "../../assets/recordingPage/camera-gray.svg";
import WritingTemplate from "./WritingTemplate";
import PublicRange from "./PublicRange";
import { useEffect, useState } from "react";
import { postExtractImage } from "../../api/archive";

const ExtractWritingComponent = ({
  inputValue,
  handleTextField,
  pageInputValue,
}) => {
  const [extractPublicState, setExtractPublicState] = useState("전체공개");
  const [extractImgURL, setExtractImgURL] = useState("");

  const handleState = (state) => {
    setExtractPublicState(state);
  };

  const handleExtractImage = async (e) => {
    const file = e.target.files[0]; // 선택한 파일
    if (file) {
      setExtractImgURL(URL.createObjectURL(file));
      console.log(URL.createObjectURL(file));
      const data = {
        image: URL.createObjectURL(file),
      };
      const res = await postExtractImage(data);
      console.log(res);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-[0.38rem]">
        <div className="flex justify-between py-2 mt-4">
          <div className="text-b1 font-semibold">발췌</div>
          <div className="flex gap-[1.12rem]">
            <label
              htmlFor="ExtractImage"
              className="flex gap-[0.47rem] items-center cursor-pointer"
            >
              <img src={camera} alt="camera" />
              <div className="text-b2 text-gray-500">문장스캔</div>
            </label>
            <input
              id="ExtractImage"
              type="file"
              className="hidden"
              onChange={handleExtractImage}
            />
            <PublicRange
              publicState={extractPublicState}
              setPublicState={setExtractPublicState}
              handleState={handleState}
            />
          </div>
        </div>
        <div onClick={handleTextField} className="cursor-pointer">
          <WritingTemplate height="11rem">
            <div className="flex gap-1 justify-end text-b2 ">
              <div
                className={`${
                  pageInputValue ? "text-gray-800" : "text-gray-400"
                }`}
              >
                {pageInputValue ? pageInputValue : "페이지"}
              </div>
              <div className="text-gray-400">p</div>
            </div>
            <textarea
              value={inputValue}
              className="w-[20.5625rem] h-[6rem] mt-2 bg-transparent text-b2 appearance-none outline-none resize-none"
              placeholder="책의 구절을 입력하세요"
              readOnly
            />
          </WritingTemplate>
        </div>
      </div>
    </>
  );
};
export default ExtractWritingComponent;
