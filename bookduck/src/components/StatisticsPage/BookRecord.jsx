// 현재 달과 월별 책 개수를 props로 받을 예정(api 나와야 확실히 알것같음)
// 높이 상대적으로 달라짐 -> 최대 권수로 나눠서 %로 높이 적용?
// 1~6월까지 div다 만들어놓고(width가 다르니까)
// width는 고정 height랑 현재 달에 따라 색깔 변화, 0일때랑 아닐때 구분해서 회전여부 결정
{
  /* 최대 높이 224px = 14rem
            최소 높이 112px = 7 rem
            0권일 때 4px = 0.25rem
            - 독서량이 0일 경우에는 모두 0도로 고정 */
}
const BookRecord = () => {
  return (
    <div className="flex items-end text-b1 text-center text-white font-semibold w-full">
      <div className="bg-orange-300 ml-[6px] rounded-t-sm w-[32px] h-[112px] rotate-[5.223deg]">
        0
      </div>
      <div className="bg-orange-300 ml-[6px] rounded-t-sm w-[32px] h-[112px]">
        10
      </div>
      <div className="bg-orange-300 ml-[7px] rounded-t-sm w-[43px] h-[4px]">
        0
      </div>
      <div className="bg-orange-300 ml-[9px] rounded-t-sm w-[32px] h-[112px]">
        0
      </div>
      <div className="bg-orange-300 ml-[5px] rounded-t-sm w-[36px] h-[112px]">
        0
      </div>
      <div className="bg-orange-300 ml-[9px] rounded-t-sm w-[32px] h-[112px] rotate-[-10.435deg]">
        0
      </div>
    </div>
  );
};
export default BookRecord;
