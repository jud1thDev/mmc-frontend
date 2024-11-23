import { useLocation, useParams } from "react-router-dom";
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
import BottomSheetModal2 from "../../components/BookInfoPage/BottomSheetModal2";

const ArchiveDetail = () => {
  const pathname = window.location.pathname;
  const [isHeightExceeded, setIsHeightExceeded] = useState(false);
  const [visibleMenu, setVisibleMenu] = useState(false);
  const [visible, setVisible] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const location = useLocation();

  const archiveDetailData = location.state?.detailData || {};
  console.log("123");

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

  //메뉴 바텀시트에서 삭제 버튼 누르면 실행
  const handleDelete = () => {
    handleCancel();
    setShowDeleteModal(true);
  };

  //삭제 모달창에서 취소 버튼 누르면 실행
  const handleDeleteModal = () => {
    setShowDeleteModal(false);
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
            {pathname.split("/")[1] === "excerpt-archive-detail" && (
              <ExtractDetailComponent archiveDetailData={archiveDetailData} />
            )}
            {pathname.split("/")[1] === "review-archive-detail" && (
              <ReviewDetailComponent archiveDetailData={archiveDetailData} />
            )}
            {pathname.split("/")[1] === "total-archive-detail" && (
              <>
                <ExtractDetailComponent archiveDetailData={archiveDetailData} />
                <ReviewDetailComponent archiveDetailData={archiveDetailData} />
              </>
            )}

            <AuthorComponent archiveDetailData={archiveDetailData} />
          </div>
          <div
            className={`mt-8 ${
              isHeightExceeded
                ? "mb-[1.38rem]"
                : "absolute bottom-[1.38rem] left-1/2 -translate-x-1/2"
            }`}
          >
            <CloseButton />
          </div>
        </div>
      </div>
      {visibleMenu && (
        <BottomSheetModal2
          bottomSheetShow={visibleMenu}
          setBottomSheetShow={setVisibleMenu}
          visible={visible}
          setVisible={setVisible}
          handleDelete={handleDelete}
        />
      )}
      {showDeleteModal && (
        <DeleteModal
          title="정말 삭제하시겠어요?"
          content="삭제된 카드는 다시 복구할 수 없어요."
          leftBtnText="삭제"
          rightBtnText="취소"
          onLeftClick={() => {}}
          onRightClick={handleDeleteModal}
        />
      )}
    </>
  );
};
export default ArchiveDetail;
