import right from "../../assets/statisticsPage/right.svg";
import Header3 from "../../components/common/Header3";
import UserDuck from "../../components/CharacterPage/UserDuck";
import RecordCalender from "../../components/StatisticsPage/RecordCalender";
import StatisticsHeader from "../../components/StatisticsPage/StatisticsHeader";
import SummaryFloatingButton from "../../components/StatisticsPage/SummaryFloatingButton";
const StatisticsPage = () => {
  return (
    <div>
      <Header3 title="독서 리포트" />
      <div className="flex h-[10rem]">
        <div className="flex flex-col gap-1 mt-[3.8125rem] ml-[1.75rem]">
          <div className="text-t2 font-semibold w-[10.8125rem]">
            <span className="font-regular">여덟글자잖아요오</span>님은
            <br />
            문학에 진심인 문학덕!
          </div>
          <div className="flex text-btn4 text-gray-400 gap-0.5">
            자세히보기
            <img className="ml-2" src={right} />
          </div>
        </div>
        {/* 임시  */}
        <div className="w-[180px]">
          <UserDuck />
        </div>
      </div>
      <div className="flex flex-col pt-6 px-7 pb-7 gap-7 bg-gray-50">
        <div className="text-b1 font-semibold">
          이번달 기록은 총 <span className="text-blue-800">16</span>개!
        </div>
        <div className="flex justify-between items-center">
          <RecordCalender num="10" text="발췌" />
          <RecordCalender num="6" text="감상평" />
          <RecordCalender num="12" text="다 읽은 책" big={true} />
        </div>
      </div>
      <div className="flex flex-col pt-5 h-[24.3125rem]">
        {/* 하반기도 만들어야함  */}
        <StatisticsHeader title="상반기 월별 독서량" />
        <div className="flex flex-col pt-[2.3475rem]">
          <div className="flex justify-between items-end">
            <div className=" bg-gray-100 rounded-r-[0.625rem] w-[3.5rem] h-[3.75rem]" />
            <div className="bg-orange-200 w-[16.1537rem] h-[224px]">
              {/* 최대 높이 224px = 14rem
            최소 높이 112px = 7 rem
            0권일 때 4px = 0.25rem
            - 독서량이 0일 경우에는 모두 0도로 고정 */}
            </div>
            <div className=" bg-gray-100 rounded-l-[0.625rem] w-[3.5rem] h-[3.75rem]" />
          </div>
          <div className="text-center mt-[0.625rem] text-btn4 font-semibold text-gray-[#7B7B7B]">
            1월 2월 3월 4월 5월 6월
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <SummaryFloatingButton />
      </div>
    </div>
  );
};
export default StatisticsPage;
