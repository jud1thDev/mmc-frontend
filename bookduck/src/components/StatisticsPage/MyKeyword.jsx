import rectangle1 from "../../assets/statisticsPage/rectangle1.svg";
import rectangle2 from "../../assets/statisticsPage/rectangle2.svg";
import rectangle3 from "../../assets/statisticsPage/rectangle3.svg";
import rectangle4 from "../../assets/statisticsPage/rectangle4.svg";
import rectangle5 from "../../assets/statisticsPage/rectangle5.svg";

const MyKeyword = () => {
  return (
    <div className="flex flex-col px-5 py-7 gap-6 text-b1 font-semibold">
      내 기록 키워드예요
      <div className="relative mx-[2.2813rem] w-[17.5rem] h-[6.9175rem]">
        <div
          className="mt-[0.23rem] pt-[3.75rem] pl-4 text-t1 text-white w-[6.375rem] h-[6.625rem]"
          style={{ backgroundImage: `url(${rectangle1})` }}
        >
          슬픈
        </div>
        <div
          className="absolute left-[6.75rem] top-[2.605rem] flex items-center pl-[2.8125rem] text-b1 text-gray-500 w-[7.25rem] h-[1.9375rem]"
          style={{ backgroundImage: `url(${rectangle2})` }}
        >
          아름다운
        </div>
        <div
          className="absolute top-0 right-0 flex pr-2 pt-[1.0625rem] text-st text-white w-[3.0625rem] h-[5.75rem]"
          style={{
            backgroundImage: `url(${rectangle3})`,
            writingMode: "vertical-rl",
          }}
        >
          귀여운
        </div>
        <div
          className="absolute left-[6.7813rem] top-[4.8681rem] w-[7.3125rem] h-[0.875rem]"
          style={{ backgroundImage: `url(${rectangle4})` }}
        />
        <div
          className="absolute left-[6.75rem] top-[5.98rem] w-[10.6875rem] h-[0.9375rem]"
          style={{ backgroundImage: `url(${rectangle5})` }}
        />
      </div>
    </div>
  );
};
export default MyKeyword;
