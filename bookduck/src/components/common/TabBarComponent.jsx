/* eslint-disable react/prop-types */
/*사용예시
<TabBarComponent
 tabs={["전체보기", "발췌", "감상평"]}
 activeTab={tab}
 onTabClick={setTab}
 size=""
 borderWidth="4rem"
/>
*/
const TabBarComponent = ({
  tabs,
  activeTab,
  onTabClick,
  size = "big",
  borderWidth,
  isNoti = false,
  ...props
}) => {
  const isBig = size === "big";

  return (
    <div
      className={`flex items-center w-[24.5625rem] h-[2.75rem] px-4 border-b-2 border-gray-50 relative ${
        isBig ? "justify-around" : "gap-8"
      }`}
      {...props}
    >
      {tabs.map((tab, index) => (
        <div
          key={index}
          onClick={() => onTabClick(tab)}
          className={`${
            isBig ? "flex-1" : "flex justify-center"
          } text-center cursor-pointer relative`}
        >
          <div
            className={
              activeTab === tab ? "text-black font-semibold" : "text-gray-500"
            }
          >
            {tab}
          </div>

          {activeTab === tab && (
            <div
              style={{ width: borderWidth }}
              className={`absolute bottom-[-0.75rem] h-[0.125rem] bg-black ${
                isBig ? " left-0 right-0  justify-self-center " : ""
              }`}
            />
          )}
        </div>
      ))}
      {isNoti ? (
        <button className="absolute right-4 text-special text-btn4">
          모두 읽음
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default TabBarComponent;
