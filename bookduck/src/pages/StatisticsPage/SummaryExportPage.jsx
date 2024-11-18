import ExportHeader from "../../components/StatisticsPage/ExportHeader";
import SummaryExport from "../../components/StatisticsPage/SummaryExport";
const SummaryExportPage = () => {
  return (
    <div className="flex flex-col h-full">
      <ExportHeader title="통계 요약 이미지 내보내기" />
      <div className="flex flex-col items-center mt-[6.1875rem]">
        <SummaryExport />
        <div className="mt-[3.6875rem] px-6 py-2.5 text-btn2 text-gray-600 font-semibold bg-gray-100 rounded-[63rem] cursor-pointer">
          이미지 저장
        </div>
      </div>
    </div>
  );
};
export default SummaryExportPage;
