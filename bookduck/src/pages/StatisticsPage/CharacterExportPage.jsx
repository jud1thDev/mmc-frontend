import Header3 from "../../components/common/Header3";
import ExportCharacter from "../../components/StatisticsPage/ExportCharacter";

const CharacterExportPage = () => {
  return (
    <div className="flex flex-col bg-yellow-80 h-full">
      <Header3 title="캐릭터로 내보내기" />
      <div className="flex flex-col items-center mt-[62px]">
        <ExportCharacter />
        <div className="mt-9 px-6 py-2.5 text-btn2 text-gray-600 font-semibold bg-yellow-50 rounded-[63rem] cursor-pointer">
          이미지 저장
        </div>
      </div>
    </div>
  );
};
export default CharacterExportPage;
