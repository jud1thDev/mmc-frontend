import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BookComponent from "./BookComponent";
import duck from "../../assets/common/duck.svg";

const CarouselComponent = () => {
  const bestBooks = [
    { id: "1", img: duck, title: "가나다라", writer: "나작가" },
    { id: "2", img: duck, title: "마바사", writer: "김작가" },
    { id: "3", img: duck, title: "ㅎㅎㅎ", writer: "하이" },
    { id: "4", img: duck, title: "안녕", writer: "나작가" },
    { id: "5", img: duck, title: "가나다라", writer: "나작가" },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {bestBooks.map((book) => (
        <div key={book.id} className="flex flex-row gap-3">
          <BookComponent
            img={book.img}
            title={book.title}
            writer={book.writer}
          />
        </div>
      ))}
    </Slider>
  );
};

export default CarouselComponent;
