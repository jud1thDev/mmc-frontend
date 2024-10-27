import ReviewComponents from "./ReviewComponents";

const ReviewView = () => {
  return (
    <div className="flex flex-col gap-[1rem] items-center h-[40rem]  mt-[1rem] overflow-y-auto">
      <ReviewComponents />
      <ReviewComponents />
      <ReviewComponents />
      <ReviewComponents />
      <ReviewComponents />
      <ReviewComponents />
    </div>
  );
};
export default ReviewView;
