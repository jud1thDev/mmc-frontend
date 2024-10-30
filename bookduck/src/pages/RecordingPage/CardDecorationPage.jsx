import { useLocation } from "react-router-dom";
import Header3 from "../../components/common/Header3";
import StatusBar from "../../components/common/StatusBar";
import ReviewComponents from "../../components/RecordingPage/ReviewComponents";
import Divider1 from "../../components/common/Divider1";

const CardDecorationPage = () => {
  const location = useLocation();
  const textValue = location.state?.textValue;
  const reviewTitleValue = location.state?.titleValue;
  const bookTitleValue = location.state?.bookTitleValue;
  const authorValue = location.state?.authorValue;

  return (
    <>
      <StatusBar />
      <Header3 title="감상평 카드 꾸미기" />

      <div className="flex justify-center mt-[2.69rem] mb-[5.12rem]">
        <ReviewComponents
          reviewTitleValue={reviewTitleValue}
          contents={textValue}
          bookTitleValue={bookTitleValue}
          authorValue={authorValue}
        />
      </div>
      <Divider1 />
    </>
  );
};
export default CardDecorationPage;
