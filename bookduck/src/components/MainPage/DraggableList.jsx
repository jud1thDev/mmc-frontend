import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const DraggableList = () => {
  const [items, setItems] = useState([
    { id: "1", content: "첫 번째 카드" },
    { id: "2", content: "두 번째 카드" },
    { id: "3", content: "세 번째 카드" },
  ]);
  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedItems = Array.from(items);
    const [removed] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, removed);

    setItems(reorderedItems);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="list">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="bg-gray-200 p-4 mb-2 rounded z-50"
                  >
                    {item.content}
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
