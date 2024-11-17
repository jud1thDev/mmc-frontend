import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "react-use-gesture";
import BottomSheetModal from "../common/BottomSheetModal";
import Divider2 from "../common/Divider2";
import OneBookCard from "./OneBookCard";
import ButtonComponent from "../common/ButtonComponent";
import DeleteModal from "../common/modal/DeleteModal";
import goEdit from "../../assets/mainPage/go-edit.svg";
import menu from "../../assets/mainPage/menu-vertical.svg";
import recordCircleIcon from "../../assets/recordingPage/record-circle-icon.svg";
import deleteIcon2 from "../../assets/mainPage/delete.svg";
import editIcon from "../../assets/bookinfoPage/edit.svg";
import deleteIcon from "../../assets/bookinfoPage/trash.svg";
import plusIcon from "../../assets/mainPage/plus.svg";
import helpCircle from "../../assets/mainPage/help-circle.svg";

const ReadingSpaceComponent = ({ setColor, setIsNavBar }) => {
  const navigate = useNavigate();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showOutModal, setShowOutModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isHelp, setIsHelp] = useState(false);
  const [bottomSheetShow, setBottomSheetShow] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isFloatingVisible, setFloatingVisible] = useState(true);
  const [isHelpVisible, setHelpVisible] = useState(false);
  const screenHeight = window.innerHeight;
  const initialHeight = screenHeight * 0.55;
  const expandedHeight = screenHeight * 0.95;
  const hideButtonThreshold = initialHeight + 50;
  const [cards, setCards] = useState([
    // { id: "1", title: "첫 번째 카드" },
    // { id: "2", title: "두 번째 카드" },
  ]);
  const [{ height }, api] = useSpring(() => ({
    height: initialHeight,
    onChange: () => {
      setFloatingVisible(height.get() < hideButtonThreshold);
      setHelpVisible(height.get() > hideButtonThreshold);
      setIsNavBar(height.get() < hideButtonThreshold);
    },
  }));

  const bind = useDrag(
    ({ movement: [, my], memo = height.get(), last }) => {
      if (isEditMode) return memo;
      if (last) {
        api.start({ height: my < -100 ? expandedHeight : initialHeight });
      } else {
        const newHeight = Math.max(
          initialHeight,
          Math.min(expandedHeight, memo - my)
        );
        api.start({ height: newHeight });
      }
      return memo;
    },
    { axis: "y" }
  );

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedCards = Array.from(cards);
    const [movedCard] = reorderedCards.splice(result.source.index, 1);
    reorderedCards.splice(result.destination.index, 0, movedCard);

    setCards(reorderedCards);
  };

  //useEffect 훅
  useEffect(() => {
    if (isEditMode) {
      setColor("bg-gray-5");
    } else {
      setColor("bg-gray-50");
    }
  }, [isEditMode]);

  //이벤트 핸들러
  const handleDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const handleOutModal = () => {
    setShowOutModal(false);
    handleEditMode();
  };

  const handleHelpClick = () => {
    setIsHelp(!isHelp);
  };
  const handleMenuClick = () => {
    if (height.get() < expandedHeight) {
      api.start({ height: expandedHeight });
    }
    setBottomSheetShow(true);
  };

  const handleEditClick = () => {
    setIsEditMode(true);
    setVisible(false); // 닫는 애니메이션 시작
    setTimeout(() => {
      setBottomSheetShow(false); // 애니메이션이 끝난 후 모달 완전히 닫기
    }, 200);
  };

  const handleDelete = () => {
    setShowDeleteModal(true);
  };

  const handleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const handleBackdropClick = () => {
    if (!isEditMode) {
      setVisible(false); // 닫는 애니메이션 시작
      setTimeout(() => {
        setBottomSheetShow(false); // 애니메이션이 끝난 후 모달 완전히 닫기
      }, 300);
    }
  };

  const handleOutClick = () => {
    setShowOutModal(true);
  };

  return (
    <>
      <div className="relative z-0">
        <DragDropContext onDragEnd={handleDragEnd} className="z-[-3] bg-white">
          <animated.div
            style={{ height, boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.10)" }}
            className={` ${
              isEditMode ? "bg-[#DDD]" : "bg-white"
            } fixed z-40 w-[24.5625rem] bottom-0 left-0 right-0 mx-auto max-w-md rounded-t-[1.875rem] shadow-lg cursor-pointer overflow-hidden`}
          >
            <div className="relative">
              <div className="flex h-8 w-full py-4" {...bind()}>
                <div className="h-1 w-12 bg-gray-300 rounded-full mx-auto" />
              </div>

              <div className="flex flex-row items-center justify-between px-5 mb-18">
                <div className="flex flex-row items-center gap-1">
                  <p className="text-btn3 text-gray-500 pt-1">리딩 스페이스</p>
                  {!isEditMode && isHelpVisible && (
                    <img src={helpCircle} onClick={handleHelpClick} />
                  )}
                  {isEditMode && (
                    <div className="py-2 px-4 text-c1 ml-2 bg-[#E8E4D5] rounded-[6.25rem]">
                      카드를 드래그하여 이동해보세요
                    </div>
                  )}

                  {isHelp && (
                    <img
                      src={goEdit}
                      className="absolute top-[0.37rem] left-[7.47rem] "
                    />
                  )}
                </div>
                <div className="flex flex-row items-center gap-2 flex-nowrap">
                  {/* <div onClick={handleEditMode} className="text-c2">
                    {isEditMode ? "편집" : "완료"}
                  </div> */}
                  <img src={menu} alt="menu" onClick={handleMenuClick} />
                </div>
              </div>

              <div className="p-4">
                <Droppable
                  droppableId="droppable-list"
                  isDropDisabled={!isEditMode}
                >
                  {(provided) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className="flex flex-col gap-1"
                    >
                      {cards.length === 0 ? (
                        <div className="m-[5rem] flex flex-col items-center w-[14rem]">
                          <div className=" text-gray-500 text-c1 mb-[0.38rem]">
                            리딩 스페이스가 텅 비어있네요!
                          </div>
                          <div className="text-b1 text-gray-500 font-semibold mb-4">
                            나만의 리딩 스페이스를 꾸며보세요
                          </div>
                          <ButtonComponent
                            text="추가하기"
                            type="secondary"
                            color="orange"
                            size="small"
                            onClick={() => navigate("/selectcard")}
                          />
                        </div>
                      ) : (
                        cards.map((card, index) => (
                          <Draggable
                            key={card.id}
                            draggableId={card.id}
                            index={index}
                          >
                            {(provided, snapshot) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className={`mb-4  p-1 flex justify-center rounded-xl relative ${
                                  isEditMode && snapshot.isDragging
                                    ? "bg-yellow"
                                    : "bg-gray-20"
                                }`}
                              >
                                <img
                                  src={deleteIcon2}
                                  className="z-50 absolute top-1 left-1"
                                />
                                <OneBookCard readOnly />
                              </div>
                            )}
                          </Draggable>
                        ))
                      )}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
              {isEditMode && height.get() === expandedHeight && (
                <div className="fixed bottom-0 w-[24.5625rem] h-[4rem] bg-[#DDD] p-4 flex justify-between items-center ">
                  <button
                    className="w-[8.4375rem] h-[3rem] flex items-center justify-center text-white bg-gray-400 rounded-lg"
                    onClick={handleOutClick}
                  >
                    나가기
                  </button>
                  <button
                    className="w-[13.375rem] h-[3rem] flex items-center justify-center text-white bg-gray-700 rounded-lg"
                    onClick={() => console.log("저장 버튼 클릭됨")}
                  >
                    저장하기
                  </button>
                </div>
              )}

              {isFloatingVisible && (
                <div className="absolute right-1 bottom-[-4rem] z-[100]">
                  <img
                    onClick={() => navigate("/selectbook")}
                    className=" cursor-pointer"
                    src={recordCircleIcon}
                    alt="record_circle_icon"
                  />
                </div>
              )}
            </div>
          </animated.div>
        </DragDropContext>
      </div>
      <BottomSheetModal
        bottomSheetShow={bottomSheetShow}
        setBottomSheetShow={setBottomSheetShow}
        visible={visible}
        setVisible={setVisible}
        style={{ zIndex: 100, position: "absolute" }}
      >
        <div className="w-[24.5625rem] rounded-t-xl pb-[3.125rem] pt-4 px-5 bg-gray-10 ">
          <div className="flex flex-col bg-white rounded-lg">
            <div
              className="flex items-center p-4 gap-3 text-btn2 cursor-pointer"
              onClick={() => navigate("/selectcard")}
            >
              <img className="w-6 h-6" src={plusIcon} />
              추가하기
            </div>
            <Divider2 />
            <div
              className="flex items-center p-4 gap-3 text-btn2 cursor-pointer"
              onClick={handleEditClick}
            >
              <img className="w-6 h-6" src={editIcon} />
              편집하기
            </div>
            <Divider2 />
            <div
              className="flex items-center p-4 gap-3 text-btn2 cursor-pointer"
              onClick={handleDelete}
            >
              <img src={deleteIcon} />
              전체 삭제하기
            </div>
          </div>
          <div
            className="flex justify-center items-center mt-[2.5625rem] p-4 bg-white rounded-lg cursor-pointer"
            onClick={handleBackdropClick}
          >
            취소
          </div>
        </div>
      </BottomSheetModal>
      {showDeleteModal && (
        <DeleteModal
          title="정말 삭제하시겠어요?"
          content="카드들이 모두 삭제되며 복구할 수 없어요."
          leftBtnText="삭제"
          rightBtnText="취소"
          onLeftClick={() => {}}
          onRightClick={handleDeleteModal}
        />
      )}
      {showOutModal && (
        <DeleteModal
          title={`편집된 사항을\n저장하지 않고 나갈까요?`}
          leftBtnText="나가기"
          rightBtnText="삭제"
          onLeftClick={handleOutModal}
          onRightClick={() => {}}
        />
      )}
    </>
  );
};

export default ReadingSpaceComponent;
