import { useState, useEffect } from "react";
import UserDuck from "../../components/CharacterPage/UserDuck";
import TabBarComponent from "../../components/common/TabBarComponent";
import Skin from "../../components/CharacterPage/Skin";
import ButtonComponent from "../../components/common/ButtonComponent";
import Header3 from "../../components/common/Header3";
import { getUserId } from "../../api/oauth";
import { getItemLists } from "../../api/character";
const CharacterCustomPage = () => {
  const [activeTab, setActiveTab] = useState("전체");
  const [itemLists, setItemLists] = useState([]);

  const tabToItemType = {
    전체: "ALL",
    소품: "PROP",
    모자: "HAT",
    얼굴: "FACE",
    옷: "CLOTHES",
    가방: "BAG",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getItemLists();
        console.log("조회성공: ", res);
        setItemLists(res?.itemList || []);
      } catch (err) {
        console.error("오류 발생: ", err);
      }
    };
    fetchData();
  }, []);

  // 현재 탭에 따라 아이템 필터링
  const filteredItems = itemLists.filter((item) =>
    activeTab === "전체" ? true : item.itemType === tabToItemType[activeTab]
  );
  console.log("filteredItems: ", filteredItems);

  return (
    <div className="flex flex-col bg-orange-50">
      <Header3 title="" />
      <div className="flex justify-center h-[317px]">
        <UserDuck userId={getUserId()} />
      </div>
      <div className="bg-white shadow-custom w-[24.5625rem] h-[27rem] rounded-t-[1.25rem]">
        <div className="pt-1">
          <TabBarComponent
            tabs={["전체", "소품", "모자", "얼굴", "옷", "가방"]}
            activeTab={activeTab}
            onTabClick={setActiveTab}
            size="big"
          />

          <div className="flex flex-col px-4 pt-4 gap-4 h-[18.5rem] overflow-y-scroll">
            <div className="grid grid-cols-3 gap-4">
              {filteredItems.map((item) => (
                <Skin
                  key={item.itemId}
                  item={item} // 필요한 경우 item 데이터를 props로 전달
                />
              ))}
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
