// 부모 컴포넌트에서 이미지 import 하고 <BottomSheetMenuComponent img={pencil} text="수정하기" /> 이런 식으로 사용

const BottomSheetMenuComponent = ({ img, text, onClick }) => {
  return (
    <>
      <div
        onClick={onClick}
        className="flex gap-3 items-center w-[22.5625rem] h-[3.5rem] p-4 cursor-pointer"
      >
        <img src={img} />
        <div className="text-b1 text-gray-800 ">{text}</div>
      </div>
    </>
  );
};
export default BottomSheetMenuComponent;
