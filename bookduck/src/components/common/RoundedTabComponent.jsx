const RoundedTabComponent = ({ type = "primary", tabs = [], activeTab }) => {
  return (
    <>
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`px-3 py-[0.38rem] rounded-[1.88rem] ${
            type === "primary"
              ? activeTab === tab
                ? "bg-gray-700 text-white"
                : "border-[0.0625rem] border-gray-200 bg-gray-50 text-gray-400 "
              : activeTab === tab
              ? "bg-orange-400 text-white"
              : "border-[0.0625rem] border-gray-200 bg-gray-50 text-gray-400 "
          }`}
        ></div>
      ))}
    </>
  );
};
export default RoundedTabComponent;
