import React from "react";
import ExtractCard from "./ExtractCard";
import ReviewCard from "./ReviewCard";
import OneBookCard from "./OneBookCard";
import BookDisplay from "./BookDisplay";
const Card = ({ card }) => {
  switch (card.cardType) {
    case "EXCERPT":
      return (
        <ExtractCard
          cardId={card.cardId}
          cardIndex={card.cardIndex}
          title={card.title}
          author={card.author}
          pageNumber={card.pageNumber}
          content={card.excerptContent}
        />
      );
    case "ONELINE":
      return (
        <ReviewCard
          cardId={card.cardId}
          cardIndex={card.cardIndex}
          title={card.title}
          author={card.author}
          rating={card.rating}
          content={card.oneLineContent}
        />
      );
    default:
      return (
        <BookDisplay
          cardId={card.cardId}
          cardIndex={card.cardIndex}
          imgPath1={card.imgPath1}
          imgPath2={card.imgPath2}
          text1={card.text1}
          text2={card.text2}
          text3={card.text3}
        />
      );
  }
};

export default Card;
