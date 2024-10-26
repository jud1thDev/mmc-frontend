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
          onClick={() => onTabClick(index)}
          className={`${
            isBig ? "flex-1" : "flex justify-center"
          } text-center cursor-pointer relative`}
        >
          <div
            className={
              activeTab === index ? "text-black font-semibold" : "text-gray-500"
            }
          >
            {tab}
          </div>

          {activeTab === index && (
            <div
              style={{ width: borderWidth }}
              className={`absolute bottom-[-12px] h-[2px] bg-black ${
                isBig ? " left-0 right-0  justify-self-center " : ""
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default TabBarComponent;
