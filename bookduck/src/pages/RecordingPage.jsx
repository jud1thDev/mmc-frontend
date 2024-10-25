import { useState } from "react";
import Header3 from "../components/common/Header3";
import { recordTab } from "../constant/recordTab";
import Archiving from "../components/common/RecordingPage/Archiving";
import Search from "../components/common/RecordingPage/Search";
import Library from "../components/common/RecordingPage/Library";

const RecordingPage = () => {
  const [tab, setTab] = useState(0);

  const handleTab = (index) => {
    setTab(index);
  };
  return (
    <>
      <div className="pt-[3.69rem]">
        <Header3 title="기록할 책 선택" />
        <div className=" ml-[1rem] mr-[1rem]">
          <div className="flex justify-center w-full h-[2.75rem] mb-[0.75rem] items-center">
            {recordTab.map((it) => (
              <div>
                <div
                  onClick={() => handleTab(it.id)}
                  className={`flex justify-center items-center w-[5.64rem] h-[2.5rem] text-b1  ${
                    tab === it.id ? "font-semibold" : "text-gray-400"
                  } cursor-pointer`}
                >
                  {it.name}
                </div>
                {tab === it.id && (
                  <div className=" w-[4rem] m-auto border-t-[0.1375rem] border-gray-800"></div>
                )}
              </div>
            ))}
          </div>
          {tab === 0 && <Archiving />}
          {tab === 1 && <Library />}
          {tab === 2 && <Search />}
        </div>
      </div>
    </>
  );
};
export default RecordingPage;
