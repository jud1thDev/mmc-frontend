/* eslint-disable react/prop-types */
/*사용예시
<TabBar
    tabs={["전체보기", "발췌", "감상평"]}
    activeTab={tab}
    onTabClick={setTab}
    size="big"
/>
*/
const TabBarComponent = ({
  tabs,
  activeTab,
  onTabClick,
  size = "big",
  ...props
}) => {
  const isBig = size === "big";

  return (
    <div
      className={`flex items-center w-full h-[40px] px-[16px] border-b-[1px] border-gray-200 ${
        isBig ? "justify-around" : "space-x-[32px]"
      }`}
      {...props}
    >
      {tabs.map((tab, index) => (
        <div
          key={index}
          onClick={() => onTabClick(tab)}
          className={`${
            isBig ? "flex-1" : ""
          } text-center cursor-pointer relative`}
        >
          <div className={activeTab === tab ? "text-black" : "text-gray-500"}>
            {tab}
          </div>

          {activeTab === tab && (
            <div
              className={`absolute bottom-[-12px] left-0 right-0 h-[2px] bg-black ${
                isBig ? "w-[64px] justify-self-center" : ""
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default TabBarComponent;
