import polygon from "../../assets/CharacterPage/polygon.svg";
import bookIcon from "../../assets/CharacterPage/book.svg";
import reviewIcon from "../../assets/CharacterPage/review.svg";
import right from "../../assets/CharacterPage/right.svg";
import UserDuck from "../../components/CharacterPage/UserDuck";
import Header2 from "../../components/common/Header2";

const CharacterPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Header2 title="캐릭터" main={false} />
      <div className="flex flex-col mt-[35px] gap-1 w-[288px] h-[355px]">
        <div class="flex flex-col items-center">
          <div className="flex justify-center px-6 py-2 bg-gray-50 rounded-[100px] text-b2 font-semibold text-gray-500 h-[40px]">
            캐릭터 말풍선
          </div>
          <img className="w-4 h-3 mt-[-1px]" src={polygon} />
        </div>
        <UserDuck />
      </div>
      {/* 유저 정보  */}
      <div className="flex flex-col my-1 p-4 gap-4 w-[361px]">
        <div className="flex gap-2">
          <div className="text-st font-semibold text-orange-400">레벨1</div>
          <div className="text-b1 font-semibold">유저 닉네임</div>
        </div>
        <div className="flex items-center gap-4 w-[329px] h-[24px]">
          <div className="bg-gray-100 rounded-[100px] w-[286px]">
            <div className="bg-orange-gradation-level rounded-[100px] w-[22%] h-[20px]"></div>
          </div>
          <div className="text-b2 text-gray-400">10%</div>
        </div>
      </div>
      {/* 레벨업미션 컴포넌트 분리 고려중..*/}
      <div className="flex flex-col px-5 py-4 bg-gray-25 rounded-xl gap-[16px] w-[361px]">
        <div className="text-b2 text-gray-500 font-semibold">레벨업 미션</div>
        <div className="flex flex-col gap-4">
          {/* 레벨업 미션 detail */}
          <div className="flex justify-between text-b2 text-gray-500 text-right w-[313px]">
            <div className="flex items-center gap-2 ">
              <div className="flex justify-center px-3 py-1 bg-orange-gradation-mission rounded-[100px]">
                <img src={bookIcon} alt="book Icon" className="w-4 h-4" />
              </div>
              <div className="text-b2 font-semibold">
                다 읽었어요 10권 달성하기
              </div>
            </div>
            3/10
          </div>
          <div className="flex justify-between text-b2 text-gray-500 text-right w-[313px]">
            <div className="flex items-center gap-2 ">
              <div className="flex justify-center py-1 px-3 bg-orange-gradation-mission rounded-[100px]">
                <img src={reviewIcon} alt="review Icon" className="w-4 h-4" />
              </div>
              <div className="text-b2 font-semibold">
                독서기록 10개 작성하기
              </div>
            </div>
            1/10
          </div>
        </div>
      </div>
      {/* 나의 배지 */}
      <div className="flex justify-between my-3 px-5 py-4 bg-gray-25 rounded-xl w-[361px]">
        <div className="text-b2 text-gray-500 font-semibold ">나의 배지</div>
        <img className="w-6 h-6" src={right} />
      </div>
      {/* 네비바 들어갈 자리  */}
    </div>
  );
};

export default CharacterPage;
