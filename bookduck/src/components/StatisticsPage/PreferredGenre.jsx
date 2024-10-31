import StatisticsHeader from "./StatisticsHeader";

const PreferredGenre = () => {
  return (
    <div className="flex flex-col mt-3.5">
      <StatisticsHeader title="독서 취향 분석" />
      <div className="flex flex-col pt-6 pb-7 gap-4 bg-gray-10">
        <div className="px-5 text-b1 font-semibold">
          선호하는 장르 <span className="text-orange-400">TOP3</span>를
          알려드릴게요
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex px-11 py-2 gap-6 text-b2 font-semibold bg-white">
            <span>1</span>
            <span>로맨스</span>
            <span className="font-regular text-gray-600">7권</span>
          </div>
          <div className="flex px-11 py-2 gap-6 text-b2 font-semibold bg-white">
            <span>2</span>
            <span>경제, 경영</span>
            <span className="font-regular text-gray-600">5권</span>
          </div>
          <div className="flex px-11 py-2 gap-6 text-b2 font-semibold bg-white">
            <span>3</span>
            <span>소설</span>
            <span className="font-regular text-gray-600">3권</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PreferredGenre;
