import { useParams } from "react-router-dom";
import AuthorComponent from "../../components/common/RecordingPage/AuthorComponent";
import CloseButton from "../../components/common/RecordingPage/CloseButton";
import Header2 from "../../components/common/RecordingPage/Header2";
import ReviewDetailComponent from "../../components/common/RecordingPage/ReviewDetailComponent";
import { useEffect, useRef, useState } from "react";
import ExtractDetailComponent from "../../components/common/RecordingPage/ExtractDetailComponent";
const ArchiveDetail = () => {
  const pathname = window.location.pathname;
  const [isHeightExceeded, setIsHeightExceeded] = useState(false);

  const ref = useRef(null); // 두 컴포넌트의 높이를 측정할 ref

  useEffect(() => {
    const totalHeight = ref.current ? ref.current.clientHeight : 0; // 현재 높이 측정
    setIsHeightExceeded(totalHeight > 621);
  }, [pathname]); // pathname이 변경될 때마다 높이를 재계산
  return (
    <>
      <div className=" mx-4">
        <div className="flex flex-col gap-[0.31rem]">
          <Header2 />
          <div ref={ref} className="flex flex-col gap-4">
            {pathname.split("/")[1] === "extract-archive-detail" && (
              <ExtractDetailComponent />
            )}
            {pathname.split("/")[1] === "review-archive-detail" && (
              <ReviewDetailComponent />
            )}
            {pathname.split("/")[1] === "total-archive-detail" && (
              <>
                <ExtractDetailComponent />
                <ReviewDetailComponent />
              </>
            )}

            <AuthorComponent />
          </div>
          <div
            className={`mt-8 ${
              isHeightExceeded
                ? "mb-[1.38rem]"
                : "absolute bottom-[1.38rem] left-1/2 transform-translate-x-1/2"
            }`}
          >
            <CloseButton />
          </div>
        </div>
      </div>
    </>
  );
};
export default ArchiveDetail;
