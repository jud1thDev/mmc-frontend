import { useState, useEffect } from "react";
import rectangle1 from "../../assets/statisticsPage/rectangle1.svg";
import rectangle2 from "../../assets/statisticsPage/rectangle2.svg";
import rectangle3 from "../../assets/statisticsPage/rectangle3.svg";
import rectangle4 from "../../assets/statisticsPage/rectangle4.svg";
import rectangle5 from "../../assets/statisticsPage/rectangle5.svg";
import rectangle6 from "../../assets/statisticsPage/rectangle6.svg";
import rectangle7 from "../../assets/statisticsPage/rectangle7.svg";
import rectangle8 from "../../assets/statisticsPage/rectangle8.svg";
import { getKeywords } from "../../api/statistics";

const MyKeyword = () => {
  const [keywordsData, setKeywordsData] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getKeywords();
        console.log("조회 성공: ", res);
        setKeywordsData(res);
        setError(false);
      } catch (err) {
        console.error("오류 발생: ", err);
        setError(true);
      }
    };
    fetchData();
  }, []);
  if (error || !keywordsData || keywordsData.length === 0) {
    return (
      <div className="flex flex-col px-5 py-7 gap-6 text-b1 font-semibold">
        내 기록 키워드예요
        <div className="flex justify-center items-center text-btn4 text-center text-gray-400 font-regular w-full h-16">
          북덕이 분석하기에
          <br /> 정보가 부족해요
        </div>
      </div>
    );
  }

  // 키워드 배열에 따른 동적 렌더링
  const [keyword1, keyword2, keyword3, keyword4, keyword5, keyword6] =
    keywordsData;

  return (
    <div className="flex flex-col px-5 py-7 gap-6 text-b1 font-semibold">
      내 기록 키워드예요
      <div className="relative mx-[2.2813rem] w-[18.125rem] h-[11.4375rem]">
        <div
          className="mt-[0.23rem] pt-[3.75rem] pl-4 text-t1 text-white w-[7.0625rem] h-[6.625rem]"
          style={{ backgroundImage: `url(${rectangle1})` }}
        >
          {keyword1}
        </div>
        <div
          className="absolute left-[7.4375rem] top-[2.6875rem] flex justify-end items-center pr-4 text-b1 text-gray-500 w-[7.25rem] h-[1.9375rem]"
          style={{ backgroundImage: `url(${rectangle2})` }}
        >
          {keyword2}
        </div>
        <div
          className="absolute top-0 right-0 flex justify-center pr-3 text-st text-white w-[3.0625rem] h-[5.8125rem]"
          style={{
            backgroundImage: `url(${rectangle3})`,
            writingMode: "vertical-rl",
          }}
        >
          {keyword3}
        </div>
        <div
          className="absolute left-[7.4375rem] top-[4.875rem] w-[7.3125rem] h-[0.875rem]"
          style={{ backgroundImage: `url(${rectangle4})` }}
        />
        <div
          className="absolute left-[7.4375rem] top-[6.0625rem] w-[10.6875rem] h-[0.875rem]"
          style={{ backgroundImage: `url(${rectangle5})` }}
        />
        <div
          className="absolute top-[7.3125rem] flex items-center pl-[1.4375rem] text-b1 text-gray-400 w-[184px] h-[2.125rem]"
          style={{ backgroundImage: `url(${rectangle6})` }}
        >
          {keyword4}
        </div>
        <div
          className="absolute right-[0] top-[7.3125rem] flex justify-end items-center pr-[1.125rem] text-right text-b1 text-white w-[100px] h-[2.125rem]"
          style={{ backgroundImage: `url(${rectangle7})` }}
        >
          {keyword5}
        </div>
        <div
          className="absolute top-[156px] flex items-center justify-end pr-[1.125rem] text-b2 text-white w-[290px] h-[27px]"
          style={{ backgroundImage: `url(${rectangle8})` }}
        >
          {keyword6}
        </div>
      </div>
    </div>
  );
};
export default MyKeyword;
