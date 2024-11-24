import React, { useState, useEffect } from "react";
import { get, patch } from "../../api/example";
import { useNavigate } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "react-use-gesture";
import BottomSheetModal from "../common/BottomSheetModal";
import Divider2 from "../common/Divider2";
import ButtonComponent from "../common/ButtonComponent";
import goEdit from "../../assets/mainPage/go-edit.svg";
import goRight from "../../assets/mainPage/go-right.svg";
import cancel from "../../assets/mainPage/cancel.svg";
import menu from "../../assets/mainPage/menu-vertical.svg";
import recordCircleIcon from "../../assets/recordingPage/record-circle-icon.svg";
import editIcon from "../../assets/bookinfoPage/edit.svg";
import deleteIcon from "../../assets/bookinfoPage/trash.svg";
import plusIcon from "../../assets/mainPage/plus.svg";
import helpCircle from "../../assets/mainPage/help-circle.svg";
import DraggableList from "./DraggableList";
import { getUserId } from "../../api/oauth";

const ReadingSpaceComponent = ({
  setColor,
  setIsNavBar,
  visible,
  setVisible,
  bottomSheetShow,
  setBottomSheetShow,
  setShowDeleteModal = () => {},
  setShowOutModal = () => {},
  setShowFullModal = () => {},
  isEditMode,
  setIsEditMode,
  isAllDelete = false,
  setIsAllDelete,
  isMine = true,
}) => {
  //상태관리
  const navigate = useNavigate();

  const [isHelp, setIsHelp] = useState(false);

  const [isFloatingVisible, setFloatingVisible] = useState(true);
  const [isHelpVisible, setHelpVisible] = useState(false);
  const [cards, setCards] = useState([]);
  const [userId, setUserId] = useState(null);

  const screenHeight = window.innerHeight;
  const initialHeight = screenHeight * 0.55;
  const expandedHeight = screenHeight * 0.95;
  const hideButtonThreshold = initialHeight + 50;

  //API-API연결
  //API-리딩스페이스 조회
  const getCards = async () => {
    try {
      const id = await getUserId();
      setUserId(id);
      const response = await get(`/users/${id}/readingspace`);
      console.log(response);
      setCards(response.cardList);
    } catch (error) {
      console.error("리딩스페이스 조회 오류", error);
    }
  };

  //API- 편집 저장
  const patchCards = async (updatedCards) => {
    try {
      const updatedCardList = { updatedCardList: updatedCards };
      const response = await patch(`/readingspace`, updatedCardList);
      setIsEditMode(false);
      console.log(response);
      console.log("편집 완료");
    } catch (error) {
      console.error("편집 저장 오류", error);
    }
  };

  const handleSave = () => {
    const updatedCardList = cards.map((card, index) => ({
      cardId: card.cardId,
      cardIndex: index + 1,
    }));
    patchCards(updatedCardList);
  };

  //useEffect 훅
  useEffect(() => {
    if (isMine) {
      if (isEditMode) {
        setColor("bg-gray-5");
      } else {
        setColor("bg-gray-50");
      }
    }
  }, [isEditMode]);

  useEffect(() => {
    getCards();
  }, []);

  useEffect(() => {
    console.log(cards);
  }, [cards]);

  useEffect(() => {
    if (isAllDelete) {
      patchCards([]).then(() => {
        setCards([]); // API 응답 후 상태 업데이트
        console.log("전체 삭제 완료 및 UI 업데이트");
      });
      setIsAllDelete(false);
    }
  }, [isAllDelete]);

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

  const handleAddCard = () => {
    if (cards.length === 7) {
      setShowFullModal(true);
    } else {
      navigate("/selectcard");
    }
  };

  const handleGoEdit = () => {
    setIsHelp((h) => !h);
    setIsEditMode(true);
  };

  //드래그 관련
  const [{ height }, api] = useSpring(() => ({
    height: initialHeight,
    onChange: () => {
      setFloatingVisible(height.get() < hideButtonThreshold);
      setHelpVisible(height.get() > hideButtonThreshold);
      if (isMine) {
        setIsNavBar(height.get() < hideButtonThreshold);
      }
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

  return (
    <>
      <div className="relative z-0">
        <DragDropContext
          onDragEnd={handleDragEnd}
          className="z-[-3] bg-white mb-[12rem]"
        >
          <animated.div
            style={{
              height,
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.10)",
              overflowY: "auto",
            }}
            className={` ${
              isEditMode ? "bg-[#DDD]" : "bg-white"
            } fixed z-40 w-[24.5625rem] bottom-0 left-0 right-0 mx-auto max-w-md rounded-t-[1.875rem] shadow-lg cursor-pointer overflow-hidden`}
          >
            <div className="relative">
              <div
                className={`sticky top-0 z-50  h-[4rem] ${
                  isEditMode ? "bg-[#DDD]" : "bg-white"
                }`}
              >
                <div className="flex h-8 w-full py-4" {...bind()}>
                  <div className="h-1 w-12 bg-gray-300 rounded-full mx-auto" />
                </div>

                <div className="flex flex-row items-center justify-between px-5  mb-18">
                  <div className="flex flex-row items-center gap-1">
                    <p className="text-btn3 text-gray-800 pt-1 font-semibold">
                      리딩 스페이스
                    </p>
                    {isMine && !isEditMode && isHelpVisible && (
                      <img src={helpCircle} onClick={handleHelpClick} />
                    )}
                    {isEditMode && (
                      <div className="py-2 px-4 text-c1 ml-2 bg-[#E8E4D5] rounded-[6.25rem]">
                        카드를 드래그하여 이동해보세요
                      </div>
                    )}

                    {isHelp && (
                      <div className="absolute top-[1rem] left-[7.5rem] w-[12.625rem] h-[3rem]">
                        <img
                          src={goEdit}
                          className="absolute top-2 left-0 w-full h-full object-cover"
                        />
                        <img
                          src={cancel}
                          className="absolute top-4 right-[0.6rem]"
                          onClick={() => setIsHelp((h) => !h)}
                        />
                        <span className="absolute top-[1rem] left-[1.2rem] text-c1 text-gray-800">
                          위젯을 드래그하여 이동해보세요
                        </span>
                        <button
                          className="absolute left-[1.2rem] top-[2rem] text-black "
                          onClick={handleGoEdit}
                        >
                          <div className="flex ">
                            <span className="text-c1 underline underline-offset-2 decoration-grau-600 text-gray-600 mr-2">
                              편집하러 가기
                            </span>
                            <img src={goRight} />
                          </div>
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-row items-center gap-2 flex-nowrap">
                    {isMine && (
                      <img src={menu} alt="menu" onClick={handleMenuClick} />
                    )}
                  </div>
                </div>
              </div>

              <div className="p-4">
                <Droppable
                  droppableId="droppableList"
                  isDropDisabled={!isEditMode}
                >
                  {(provided) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className="flex flex-col gap-1"
                    >
                      {cards.length === 0 ? (
                        // 카드가 없을 때 렌더링
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
                            onClick={() => navigate("selectcard")}
                          />
                        </div>
                      ) : (
                        // 카드가 있을 때 렌더링
                        <DraggableList
                          cards={cards}
                          setCards={setCards}
                          isEditMode={isEditMode}
                        />
                      )}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
              {isEditMode && height.get() === expandedHeight && (
                <div className="fixed bottom-0 w-[24.5625rem] h-[4rem] bg-[#DDD] p-4 flex justify-between items-center z-50 ">
                  <button
                    className="w-[8.4375rem] h-[3rem] flex items-center justify-center text-white bg-gray-400 rounded-lg"
                    onClick={() => setShowOutModal(true)}
                  >
                    나가기
                  </button>
                  <button
                    className="w-[13.375rem] h-[3rem] flex items-center justify-center text-white bg-gray-700 rounded-lg"
                    onClick={handleSave}
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
              onClick={handleAddCard}
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
    </>
  );
};

export default ReadingSpaceComponent;
