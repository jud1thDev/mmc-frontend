/* eslint-disable react/prop-types */
/*사용예시
const [tab, setTab] = useState("공지");
<TabBarComponent
        tabs={["일반", "공지"]}
        activeTab={tab}
        onTabClick={setTab}
        size="small"
/>
*/
const TabBarComponent = ({
  tabs,
  activeTab,
  onTabClick,
  size = "big",
  isNoti = false,
  ...props
}) => {
  const isBig = size === "big";

  return (
    <div
      className={`flex items-center w-full h-[40px] px-[16px] border-b-[2px] border-[#F7F7F7] relative ${
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
              className={`absolute bottom-[-8px] left-0 right-0 h-[0.1375rem] rounded-[0.25rem] bg-[#323232] ${
                isBig ? "w-[64px] justify-self-center" : ""
              }`}
            />
          )}
        </div>
      ))}
      {isNoti ? (
        <button className="absolute right-[1rem] text-special text-btn4">
          모두 읽음
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default TabBarComponent;
