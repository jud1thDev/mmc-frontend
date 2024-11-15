import checkNo from "../../assets/characterPage/check-orange-no.svg";
import checkYes from "../../assets/characterPage/check-orange-yes.svg";

const LevelModal = ({ onClick }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="flex flex-col py-4 gap-8 bg-white w-[330px] rounded-[20px]">
        <div className="flex flex-col gap-4">
          <div className="flex justify-center items-center text-st text-center font-semibold h-[3rem]">
            레벨업 미션
          </div>
          <div className="flex flex-col px-7 gap-5 text-btn4 text-gray-400">
            <div className="flex flex-col gap-2">
              <span>달성 중</span>
              <div className="flex justify-between text-b2 text-gray-500">
                <div className="flex gap-2 text-b1 font-semibold">
                  <img src={checkNo} />
                  한줄평 10개 달성
                </div>
                1/10
              </div>
            </div>
            <div className="flex flex-col gap-2 text-btn4 text-gray-400">
              <span>달성 완료</span>
              <div className="flex justify-between text-b2 text-orange-400">
                <div className="flex gap-2 text-b1 font-semibold">
                  <img src={checkYes} />다 읽었어요 10개 달성
                </div>
                10/10
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 h-12">
          <button
            className="text-b1 font-semibold text-white bg-gray-700 p-[10px] w-[100%] h-12 rounded-[8px]"
            onClick={onClick}
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
export default LevelModal;
