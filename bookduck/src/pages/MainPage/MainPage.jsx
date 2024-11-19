import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { get } from "../../api/example";
import { getUserId } from "../../api/oauth";
import BottomNavbar from "../../components/common/BottomNavbar";
import StatusBar from "../../components/common/StatusBar";
import Header2 from "../../components/common/Header2";
import ReadingSpaceComponent from "../../components/MainPage/ReadingSpaceComponent";
import right from "../../assets/common/right-yellow.svg";
import mainDuck from "../../assets/common/main-duck.svg";
import BookCountDisplay from "../../components/MainPage/BookCountDisplay";
import { isTokenExpired } from "../../api/oauth";
import DeleteModal from "../../components/common/modal/DeleteModal";

const MainPage = () => {
  //상태 관리
  const navigate = useNavigate();
  const [bottomSheetShow, setBottomSheetShow] = useState(false);
  const [visible, setVisible] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [color, setColor] = useState("bg-gray-50");
  const [isNavBar, setIsNavBar] = useState("true");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showOutModal, setShowOutModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isAllDelete, setIsAllDelete] = useState(false);
  //API 연결
  const getUserInfo = async (userId) => {
    try {
      console.log(isTokenExpired());
      const data = await get(`/users/${userId}`);
      setUserInfo(data);
    } catch (error) {
      console.error(error);
    }
  };

  //useEffect 훅
  useEffect(() => {}, [isNavBar]);

  //userInfo 업데이트 확인
  useEffect(() => {
    console.log("Updated userInfo:", userInfo);
  }, [userInfo]);

  useEffect(() => {
    //유저아이디
    const userId = getUserId();
    getUserInfo(userId);
  }, []);

  useEffect(() => {}, [setShowOutModal]);

  const handleOutModal = () => {
    setIsEditMode(false);
    setShowOutModal(false);
  };

  const handleDelete = () => {
    setShowDeleteModal(false);
    setIsAllDelete(true);
    setVisible(false); // 닫는 애니메이션 시작
    setTimeout(() => {
      setBottomSheetShow(false); // 애니메이션이 끝난 후 모달 완전히 닫기
    }, 200);
  };

  // useEffect(() => {
  //   if (isAllDelete) {
  //     console.log("전체 삭제 완료");
  //     setIsEditMode(false);
  //     setIsAllDelete(false);
  //   }
  // }, [isAllDelete]);

  return (
    <div className={`${color} relative overflow-hidden h-screen`}>
      <StatusBar />
      <div className="px-4">
        <Header2 />
      </div>
      <div className="pl-5 mt-[1.75rem]">
        <div className="text-t2 font-semibold text-black">
          {userInfo?.nickname}님
        </div>
        <div className="text-t2 font-semibold text-black mt-[0.38rem]">
          꾸준한 독서 함께해요!
        </div>
        <div className="flex flex-col w-[10.625rem] h-[6rem] bg-white rounded-[0.75rem] mt-[2.69rem] pl-4 pr-5 pt-3 gap-2">
          <span className="text-b2 text-gray-500 font-semibold">
            현재 나의 기록수
          </span>
          <div className="flex flex-row">
            <BookCountDisplay bookCount={userInfo?.bookCount} />
            <div className="ml-[0.62rem] self-end text-b2 text-gray-500 font-semibold">
              개
            </div>
          </div>
        </div>
        <button
          className="flex justify-center items-center gap-[0.38rem] w-[10.625rem] py-1 px-3 bg-white rounded-[0.625rem] mt-[0.81rem]"
          onClick={() => navigate("/recording")}
        >
          <span className="text-b2 text-gray-500 font-semibold">
            독서 리포트 보러가기
          </span>
          <img src={right} alt="arrow" />
        </button>
        <img src={mainDuck} className="absolute top-[11.42rem] left-[9rem]" />
        <ReadingSpaceComponent
          setColor={setColor}
          setIsNavBar={setIsNavBar}
          setShowDeleteModal={setShowDeleteModal}
          setShowOutModal={setShowOutModal}
          isEditMode={isEditMode}
          setIsEditMode={setIsEditMode}
          isAllDelete={isAllDelete}
          visible={visible}
          setVisible={setVisible}
          bottomSheetShow={bottomSheetShow}
          setBottomSheetShow={setBottomSheetShow}
          setIsAllDelete={setIsAllDelete}
        />
      </div>
      {isNavBar && <BottomNavbar />}
      {showDeleteModal && (
        <DeleteModal
          title="정말 삭제하시겠어요?"
          content="카드들이 모두 삭제되며 복구할 수 없어요."
          leftBtnText="삭제"
          rightBtnText="취소"
          onLeftClick={handleDelete}
          onRightClick={() => setShowDeleteModal(false)}
        />
      )}
      {showOutModal && (
        <DeleteModal
          title={`편집된 사항을\n저장하지 않고 나갈까요?`}
          leftBtnText="나가기"
          rightBtnText="계속하기"
          onLeftClick={handleOutModal}
          onRightClick={() => setShowOutModal(false)}
        />
      )}
    </div>
  );
};

export default MainPage;
