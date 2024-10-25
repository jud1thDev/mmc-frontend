import MenuBar from "../components/common/menuBar";
import FloatingRecordButton from "../components/common/RecordingPage/FloatingRecordButton";
import Header from "../components/common/RecordingPage/Header";

const RecordingPage = () => {
  return (
    <>
      <div className="pt-[3.69rem]">
        <Header title="기록 아카이브" />
        <MenuBar />
        <FloatingRecordButton />
      </div>
    </>
  );
};
export default RecordingPage;
