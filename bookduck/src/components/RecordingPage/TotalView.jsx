import ExtractComponents from "./ExtractComponents";
import ReviewComponents from "./ReviewComponents";

const TotalView = () => {
  return (
    <div>
      <div className="flex flex-col gap-[1rem] items-center h-[40rem] mt-[1rem] overflow-y-auto">
        <ExtractComponents />
        <ReviewComponents />
        <ExtractComponents />
        <ReviewComponents />
        <ExtractComponents />
        <ReviewComponents />
      </div>
    </div>
  );
};
export default TotalView;
