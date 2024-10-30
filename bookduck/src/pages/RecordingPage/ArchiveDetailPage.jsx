import { useParams } from "react-router-dom";
import AuthorComponent from "../../components/RecordingPage/AuthorComponent";
import CloseButton from "../../components/RecordingPage/CloseButton";
import Header2 from "../../components/RecordingPage/Header2";
import ReviewDetailComponent from "../../components/RecordingPage/ReviewDetailComponent";
import { useEffect, useRef, useState } from "react";
import ExtractDetailComponent from "../../components/RecordingPage/ExtractDetailComponent";
import StatusBar from "../../components/common/StatusBar";
import BottomSheetModal from "../../components/common/BottomSheetModal";
import BottomSheetMenuComponent from "../../components/common/BottomSheetMenuComponent";
import pencil from "../../assets/recordingPage/pencil.svg";
import trash from "../../assets/recordingPage/trash.svg";
import Divider2 from "../../components/common/Divider2";
import DeleteModal from "../../components/common/modal/DeleteModal";

const ArchiveDetail = () => {
  const pathname = window.location.pathname;
  const [isHeightExceeded, setIsHeightExceeded] = useState(false);
  const [visibleMenu, setVisibleMenu] = useState(false);
  const [visible, setVisible] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const ref = useRef(null); // 두 컴포넌트의 높이를 측정할 ref

  const handleMenu = () => {
    setVisibleMenu(true);
  };

  const handleCancel = () => {
    setVisible(false); // 닫는 애니메이션 시작
    setTimeout(() => {
      setVisibleMenu(false); // 애니메이션이 끝난 후 모달 완전히 닫기
    }, 300);
  };

  const handleDelete = () => {
    handleCancel();
    setShowDeleteModal(true);
  };

  useEffect(() => {
    const totalHeight = ref.current ? ref.current.clientHeight : 0; // 현재 높이 측정
    setIsHeightExceeded(totalHeight > 621);
  }, [pathname]); // pathname이 변경될 때마다 높이를 재계산

  return (
    <>
      <StatusBar />
      <div className=" mx-4">
        <div className="flex flex-col gap-[0.31rem]">
          <Header2 handleMenu={handleMenu} />
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
      {visibleMenu && (
        <BottomSheetModal
          bottomSheetShow={visibleMenu}
          setBottomSheetShow={setVisibleMenu}
          visible={visible}
          setVisible={setVisible}
        >
          <BottomSheetMenuComponent img={pencil} text="수정하기" />
          <Divider2 />
          <BottomSheetMenuComponent
            img={trash}
            text="삭제하기"
            onClick={handleDelete}
          />
          <div
            onClick={handleCancel}
            className="flex justify-center items-center w-[22.5625rem] h-[3.25rem] mt-[2.56rem] p-4 text-b1 text-gray-800 cursor-pointer"
          >
            취소
          </div>
        </BottomSheetModal>
      )}
      {showDeleteModal && <DeleteModal handleCancel={setShowDeleteModal} />}
    </>
  );
};
export default ArchiveDetail;
