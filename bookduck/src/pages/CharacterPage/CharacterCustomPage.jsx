import { useState } from "react";
import UserDuck from "../../components/CharacterPage/UserDuck";
import TabBarComponent from "../../components/common/TabBarComponent";
import Skin from "../../components/CharacterPage/Skin";
import ButtonComponent from "../../components/common/ButtonComponent";
import Header3 from "../../components/common/Header3";
const CharacterCustomPage = () => {
  const [activeTab, setActiveTab] = useState("전체");

  return (
    <div className="flex flex-col bg-orange-50">
      <Header3 title="" />
      <div className="flex justify-center h-[19.8125rem]">
        <UserDuck />
      </div>
      <div className="bg-white shadow-custom w-[24.5625rem] h-[27rem] rounded-t-[1.25rem]">
        <div className="pt-1">
          <TabBarComponent
            tabs={["전체", "소품", "모자", "안경", "옷", "가방"]}
            activeTab={activeTab}
            onTabClick={setActiveTab}
            size="big"
          />

          <div className="flex flex-col px-4 pt-4 gap-4 h-[18.5rem] overflow-y-scroll">
            <div className="flex gap-4">
              <Skin isLock={false} />
              <Skin isLock={false} />
              <Skin isLock={true} />
            </div>
            <div className="flex gap-4">
              <Skin isLock={false} />
              <Skin isLock={false} />
              <Skin isLock={true} />
            </div>
            <div className="flex gap-4">
              <Skin isLock={false} />
              <Skin isLock={false} />
              <Skin isLock={true} />
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-1.5 h-[5.5rem]">
          <ButtonComponent text="저장" color="gray700" />
        </div>
      </div>
    </div>
  );
};
export default CharacterCustomPage;
