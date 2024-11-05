import Header3 from "../../components/common/Header3";
import RecordCalender from "../../components/StatisticsPage/RecordCalender";
import Divider2 from "../../components/common/Divider2";
import MyKeyword from "../../components/StatisticsPage/MyKeyword";
import SummaryFloatingButton from "../../components/StatisticsPage/SummaryFloatingButton";
import PreferredAuthor from "../../components/StatisticsPage/PreferredAuthor";
import PreferredGenre from "../../components/StatisticsPage/PreferredGenre";
import MonthlyReading from "../../components/StatisticsPage/MonthlyReading";
import UserCard from "../../components/StatisticsPage/UserCard";

const StatisticsPage = () => {
  return (
    <div className="flex flex-col pb-[11.25rem]">
      <Header3 title="독서 리포트" />
      <UserCard />
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
      <MonthlyReading />
      <PreferredGenre />
      <Divider2 />
      {/* 같은 작가의 작품을 최소 2권 이상을 읽어야 ‘선호하는 작가' 카드가 보임 */}
      <PreferredAuthor />
      <Divider2 />
      <MyKeyword />
      <div className="flex justify-center text-center mt-[3.75rem] text-b2 text-gray-400">
        북덕은 언제나 여덟글자잖아요오님의
        <br />
        독서를 응원합니다!
      </div>
      <div className="flex justify-center">
        <SummaryFloatingButton />
      </div>
    </div>
  );
};
export default StatisticsPage;
