import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "react-use-gesture";
import BottomSheetModal from "../common/BottomSheetModal";
import Divider2 from "../common/Divider2";
import OneBookCard from "./OneBookCard";
import ButtonComponent from "../common/ButtonComponent";
import goEdit from "../../assets/mainPage/go-edit.svg";
import menu from "../../assets/mainPage/menu-vertical.svg";
import recordCircleIcon from "../../assets/recordingPage/record-circle-icon.svg";
import deleteIcon2 from "../../assets/mainPage/delete.svg";
import editIcon from "../../assets/bookinfoPage/edit.svg";
import deleteIcon from "../../assets/bookinfoPage/trash.svg";
import plusIcon from "../../assets/mainPage/plus.svg";
import helpCircle from "../../assets/mainPage/help-circle.svg";

const ReadingSpaceComponent = ({ setColor }) => {
  const navigate = useNavigate();
  const screenHeight = window.innerHeight;
  const initialHeight = screenHeight * 0.55;
  const expandedHeight = screenHeight * 0.95;
  const hideButtonThreshold = initialHeight + 50;

  const [cards, setCards] = useState([
    // { id: "1", title: "첫 번째 카드" },
    // { id: "2", title: "두 번째 카드" },
  ]);

  const [isEditMode, setIsEditMode] = useState(false);
  const [isHelp, setIsHelp] = useState(false);
  const [bottomSheetShow, setBottomSheetShow] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isFloatingVisible, setFloatingVisible] = useState(true);
  const [isHelpVisible, setHelpVisible] = useState(false);

  useEffect(() => {
    if (isEditMode) {
      setColor("bg-gray-5");
    } else {
      setColor("bg-gray-50");
    }
  }, [isEditMode]);

  const [{ height }, api] = useSpring(() => ({
    height: initialHeight,
    onChange: () => {
      setFloatingVisible(height.get() < hideButtonThreshold);
      setHelpVisible(height.get() > hideButtonThreshold);
    },
  }));

  const handleHelpClick = () => {
    setIsHelp(!isHelp);
  };
  const handleMenuClick = () => {
    setBottomSheetShow(true);
  };

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

  const handleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedCards = Array.from(cards);
    const [movedCard] = reorderedCards.splice(result.source.index, 1);
    reorderedCards.splice(result.destination.index, 0, movedCard);

    setCards(reorderedCards);
  };

  const handleBackdropClick = () => {
    if (!isEditMode) {
      setVisible(false); // 닫는 애니메이션 시작
      setTimeout(() => {
        setBottomSheetShow(false); // 애니메이션이 끝난 후 모달 완전히 닫기
      }, 300);
    }
  };

  return (
    <>
      <div className="relative">
        <DragDropContext onDragEnd={handleDragEnd} className="z-[-3] bg-white">
          <animated.div
            style={{ height, boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.10)" }}
            className={` ${
              isEditMode ? "bg-gray-100" : "bg-white"
            } fixed z-40 w-[24.5625rem] bottom-0 left-0 right-0 mx-auto max-w-md rounded-t-[1.875rem] shadow-lg cursor-pointer overflow-hidden`}
          >
            <div className="relative">
              <div className="flex h-8 w-full py-4" {...bind()}>
                <div className="h-1 w-12 bg-gray-300 rounded-full mx-auto" />
              </div>

              <div className="flex flex-row items-center justify-between px-5 pt-1 mb-2">
                <div className="flex flex-row items-center gap-1">
                  <p className="text-btn3 text-gray-500">리딩 스페이스</p>
                  {isHelpVisible && (
                    <img src={helpCircle} onClick={handleHelpClick} />
                  )}
                  {isHelp && (
                    <img
                      src={goEdit}
                      className="absolute top-[0.37rem] left-[7.47rem] "
                    />
                  )}
                </div>
                <div className="flex flex-row items-center gap-2 flex-nowrap">
                  <div onClick={handleEditMode} className="text-c2">
                    {isEditMode ? "편집" : "완료"}
                  </div>
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
        style={{ zIndex: 50 }}
      >
        <div className="w-[24.5625rem] rounded-t-xl pb-[3.125rem] pt-4 px-5 bg-gray-10 z-[500]">
          <div className="flex flex-col bg-white rounded-lg">
            <div className="flex items-center p-4 gap-3 text-btn2 cursor-pointer">
              <img className="w-6 h-6" src={plusIcon} />
              추가하기
            </div>
            <Divider2 />
            <div className="flex items-center p-4 gap-3 text-btn2 cursor-pointer">
              <img className="w-6 h-6" src={editIcon} />
              편집하기
            </div>
            <Divider2 />
            <div className="flex items-center p-4 gap-3 text-btn2 cursor-pointer">
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
    </>
  );
};

export default ReadingSpaceComponent;
