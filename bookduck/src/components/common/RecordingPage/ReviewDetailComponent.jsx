import heart_white from "../../../assets/recordingPage/heart-white.svg";
import share_white from "../../../assets/recordingPage/share-white.svg";

const ReviewDetailComponent = () => {
  return (
    <div>
      <div className="w-[22.5825rem]  px-5 py-6 rounded-[0.88rem] bg-gray-400 ">
        <div className="flex flex-col gap-2 ">
          <div className="text-c1 text-white ">2024.09.20 / 비공개</div>
          <div className="text-st font-semibold text-white ">걸작. 최고다.</div>
          <div className="text-b2 text-white ">
            한번 피면 끝장을 보게 되는 책이다. 중간에 덮을 수가 없다. 초반엔
            전기적 사실을 통해 배울 점들을 기대하며 천천히 읽어나가다 예상치
            못한 어떤 지점에서 골이 띵할 정도의 과격한 유턴을 하게 되는데,
            그때부터 이 책의 정수가 드러나기 시작한다. 한번 피면 끝장을 보게
            되는 책이다. 중간에 덮을 수가 없다. 초반엔 전기적 사실을 통해 배울
            점들을 기대하며 천천히 읽어나가다 예상치 못한 어떤 지점에서 골이
            띵할 정도의 과격한 유턴을 하게 되는데, 그때부터 이 책의 정수가
            드러나기 시작한다. 한번 피면 끝장을 보게 되는 책이다. 중간에 덮을
            수가 없다. 초반엔 전기적 사실을 통해 배울 점들을 기대하며 천천히
            읽어나가다 예상치 못한 어떤 지점에서 골이 띵할 정도의 과격한 유턴을
            하게 되는데, 그때부터 이 책의 정수가 드러나기 시작한다. 한번 피면
            끝장을 보게 되는 책이다. 중간에 덮을 수가 없다. 초반엔 전기적 사실을
            통해 배울 점들을 기대하며 천천히 읽어나가다 예상치 못한 어떤
            지점에서 골이 띵할 정도의 과격한 유턴을 하게 되는데, 그때부터 이
            책의 정수가 드러나기 시작한다. 한번 피면 끝장을 보게 되는 책이다.
            중간에 덮을 수가 없다. 초반엔 전기적 사실을 통해 배울 점들을
            기대하며 천천히 읽어나가다 예상치 못한 어떤 지점에서 골이 띵할
            정도의 과격한 유턴을 하게 되는데, 그때부터 이 책의 정수가 드러나기
            시작한다.
          </div>
          <div className="flex gap-4 justify-end">
            <img
              className="cursor-pointer"
              src={heart_white}
              alt="heart_gray"
            />
            <img
              className="cursor-pointer"
              src={share_white}
              alt="share_gray"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReviewDetailComponent;
