import { useRef } from "react";
import html2canvas from "html2canvas";
import ExportHeader from "../../components/StatisticsPage/ExportHeader";
import SummaryExport from "../../components/StatisticsPage/SummaryExport";
const SummaryExportPage = () => {
  const exportRef = useRef(null);

  const handleSaveImage = async () => {
    if (exportRef.current) {
      try {
        const canvas = await html2canvas(exportRef.current, {
          backgroundColor: null, // 배경을 투명하게 설정
          logging: false, // 디버깅을 위한 로그 비활성화
        });
        const dataUrl = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "statistics-summary.png";
        link.click();
      } catch (error) {
        console.error("이미지 저장 실패: ", error);
      }
    }
  };
  return (
    <div className="flex flex-col h-full">
      <ExportHeader title="통계 요약 이미지 내보내기" />
      <div className="flex flex-col items-center mt-[6.1875rem]">
        <div
          ref={exportRef}
          style={{ background: "transparent", overflow: "hidden" }}
        >
          <SummaryExport />
        </div>
        <div
          className="mt-[3.6875rem] px-6 py-2.5 text-btn2 text-gray-600 font-semibold bg-gray-100 rounded-[63rem] cursor-pointer"
          onClick={handleSaveImage}
        >
          이미지 저장
        </div>
      </div>
    </div>
  );
};
export default SummaryExportPage;
