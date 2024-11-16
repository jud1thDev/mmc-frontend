import StatisticsHeader from "./StatisticsHeader";

const PreferredGenre = ({ userData }) => {
  const categories = [
    { id: 1, name: "로맨스", count: "7권" },
    { id: 2, name: "경제, 경영", count: "5권" },
    { id: 3, name: "소설", count: "3권" },
  ];
  return (
    <div className="flex flex-col mt-3.5">
      <StatisticsHeader title="독서 취향 분석" />
      <div className="flex flex-col pt-6 pb-7 gap-4 bg-gray-10">
        <div className="px-5 text-b1 font-semibold">
          선호하는 장르 <span className="text-orange-400">TOP3</span>를
          알려드릴게요
        </div>
        <div className="flex flex-col gap-3">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex px-11 py-2 gap-6 text-b2 font-semibold bg-white"
            >
              <span>{category.id}</span>
              <span>{category.name}</span>
              <span className="text-gray-600">{category.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default PreferredGenre;
