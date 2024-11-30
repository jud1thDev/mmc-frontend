import React, { useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import deleteIcon2 from "../../assets/mainPage/delete.svg";
import Card from "./Card";

const DraggableList = ({ cards, setCards, isEditMode }) => {
  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedCards = Array.from(cards);
    const [removed] = reorderedCards.splice(result.source.index, 1);
    reorderedCards.splice(result.destination.index, 0, removed);

    setCards(reorderedCards); // 부모 컴포넌트 상태 업데이트
  };

  const handleDeleteCard = (cardId) => {
    const updatedCards = cards.filter((card) => card.cardId !== cardId);
    setCards(updatedCards);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="list" isDropDisabled={!isEditMode}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {cards.map((card, index) => (
              <Draggable
                key={card.cardId}
                draggableId={`${card.cardId}`}
                index={index}
              >
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`mb-4 p-1 flex justify-center rounded-xl relative ${
                      isEditMode
                        ? snapshot.isDragging
                          ? "bg-[#FFFAE6]"
                          : "bg-[#EEE]"
                        : ""
                    }`}
                  >
                    {isEditMode && (
                      <img
                        src={deleteIcon2}
                        onClick={() => handleDeleteCard(card.cardId)}
                        className="z-10 absolute top-1 left-1"
                      />
                    )}
                    <Card card={card} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DraggableList;
