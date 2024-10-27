const CompleteButton = ({ complete }) => {
  return (
    <button
      className={`w-[22.5625rem] h-[2.75rem] px-[9.31rem] py-[0.75rem] rounded-[0.5rem]  ${
        complete ? "bg-gray-700 " : "bg-gray-100"
      } text-white`}
    >
      완료
    </button>
  );
};
export default CompleteButton;
