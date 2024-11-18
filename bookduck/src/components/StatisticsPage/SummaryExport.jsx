import summary from "../../assets/statisticsPage/summary.svg";
import star from "../../assets/statisticsPage/star-summary.svg";
import divider from "../../assets/statisticsPage/divider.svg";
const SummaryExport = () => {
  return (
    <div
      className="relative flex flex-col items-center w-[285px] h-[430px]"
      style={{ backgroundImage: `url(${summary})` }}
    >
      <div className=" text-center mt-[27px] pr-[21px] text-st font-semibold">
        <span className="font-regular">여덟글자입니다요</span>님의
        <br />
        가을 독서 리포트
      </div>
      <div className="mt-5 mb-[1.1431rem] pr-4 text-b2 text-gray-500 font-semibold rotate-[1.417deg]">
        Date 2024.09~10
      </div>
      <div className="relative flex flex-col pr-4 gap-2 text-gray-800 text-b2 font-semibold">
        <img className="w-[14.4375rem] h-[0.0625rem]" src={divider} />
        <div className="flex justify-between px-2 ">
          다 읽은 책<span>7</span>
        </div>
        <img className="w-[14.4375rem] h-[0.0625rem]" src={divider} />
        <div className="flex flex-col px-2 gap-1">
          <div className="flex justify-between">
            선호하는 작가<span>한강</span>
          </div>
          <div className="flex justify-between">
            선호하는 장르<span>로맨스</span>
          </div>
          <div className="flex justify-between">
            기록 키워드<span>아름다운</span>
          </div>
        </div>
        <img className="mb-0.5 w-[14.4375rem] h-[0.0625rem]" src={divider} />
        <div className="flex flex-col px-2 gap-1">
          <div className="flex justify-between">
            발췌<span>6</span>
          </div>
          <div className="flex justify-between">
            감상<span>10</span>
          </div>
          <div className="flex justify-between">
            TOTAL<span>16</span>
          </div>
        </div>
        <img className="mt-0.5 w-[14.4375rem] h-[0.0625rem]" src={divider} />
      </div>
      <div className="absolute bottom-[1.375rem] left-[6.4063rem] flex items-center text-[0.6875rem] font-caprasimo text-gray-500 z-10 w-[3.75rem] h-[0.8125rem]">
        BookDuck
      </div>
      <img
        className="absolute bottom-[0.8125rem] left-[7.2813rem] w-[1.875rem] h-[1.875rem]"
        src={star}
      />
    </div>
  );
};
export default SummaryExport;
