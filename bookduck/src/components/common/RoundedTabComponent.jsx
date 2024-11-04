const RoundedTabComponent = ({
  type = "primary",
  tabs = [],
  activeTab,
  onTabClick,
}) => {
  return (
    <>
      <div className="flex gap-[0.62rem]">
        {tabs.map((tab, index) => (
          <div
            onClick={() => onTabClick(tab)}
            key={index}
            className={` w-fit px-3 py-[0.38rem] rounded-[1.88rem] ${
              type === "primary"
                ? activeTab === tab
                  ? "bg-gray-700 text-white"
                  : "border-[0.0625rem] border-gray-200 bg-gray-50 text-gray-400 "
                : activeTab === tab
                ? "bg-orange-400 text-white"
                : "border-[0.0625rem] border-gray-200 bg-gray-50 text-gray-400 "
            } text-c1 cursor-pointer`}
          >
            <div className="flex justify-center items-center min-w-[3rem] h-4">
              {tab}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default RoundedTabComponent;
