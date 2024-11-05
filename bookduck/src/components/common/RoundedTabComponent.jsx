const RoundedTabComponent = ({
  type = "primary",
  tabs = [],
  activeTab,
  activeTabs,
  multiple = false,
  onTabClick,
}) => {
  return (
    <>
      <div className={`flex ${type === "primary" ? "gap-[0.62rem]" : "gap-2"}`}>
        {tabs.map((tab, index) => (
          <div
            onClick={() => onTabClick(tab)}
            key={index}
            className={`h-7 px-3 py-[0.38rem] rounded-[1.88rem] ${
              type === "primary"

                ? (multiple ? activeTabs.includes(tab) : activeTab === tab)
                  ? "w-18 bg-gray-700"
                  : "w-18 border-[0.0625rem] border-gray-200 bg-gray-50"
                : (multiple ? activeTabs.includes(tab) : activeTab === tab)
                ? "w-20 bg-orange-400"
                : "w-20 border-[0.0625rem] border-gray-200 bg-gray-50"
            }  text-c1 cursor-pointer`}

          >
            <div
              className={`flex justify-center items-center ${
                type === "primary" ? "w-[3rem]" : "w-[3.5rem]"
              } h-4 text-c1 ${
                (multiple ? activeTabs.includes(tab) : activeTab === tab)
                  ? "text-white"
                  : "text-gray-400"
              }`}
            >
              {tab}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default RoundedTabComponent;
