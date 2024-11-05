import ExtractComponents from "./ExtractComponents";
import ReviewComponents from "./ReviewComponents";

const TotalView = () => {
  return (
    <div className="flex flex-col gap-[1rem] items-center mt-[1rem]">
      <ExtractComponents />
      <ReviewComponents />
      <ExtractComponents />
      <ReviewComponents />
      <ExtractComponents />
      <ReviewComponents />
    </div>
  );
};
export default TotalView;
