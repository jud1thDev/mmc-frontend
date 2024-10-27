import heart_gray from "../../assets/recordingPage/heart-gray.svg";
import share_gray from "../../assets/recordingPage/share-gray.svg";

const ExtractDetailComponent = () => {
  return (
    <div>
      <div className="w-[22.5825rem]  px-5 py-6 rounded-[0.88rem] bg-gray-10 shadow-custom  ">
        <div className="flex flex-col gap-5  ">
          <div className="flex justify-between">
            <div className="text-c1 text-gray-400">2024.09.20 / 비공개</div>
            <div className="text-b2 text-gray-400">54p</div>
          </div>
          <div className="text-b2 text-gray-800  ">
            한번 피면 끝장을 보게 되는 책이다. 중간에 덮을 수가 없다. 초반엔
            전기적 사실을 통해 배울 점들을 기대하며 천천히 읽어나가다 예상치 의
            정수가 드러나기 시작한다.
          </div>
          <div className=" flex gap-4 justify-end">
            <img className="cursor-pointer" src={heart_gray} alt="heart_gray" />
            <img className="cursor-pointer" src={share_gray} alt="share_gray" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExtractDetailComponent;
