import React, { useState } from "react";
import Header1 from "../../components/common/Header1";
import StatusBar from "../../components/common/StatusBar";
import TabBarComponent from "../../components/common/TabBarComponent";
import FriendListComponent from "../../components/common/FriendListComponent";
import up from "../../assets/common/up.svg";
import down from "../../assets/common/down.svg";

const FriendListPage = () => {
  const [tab, setTab] = useState("요청");
  const [isRequested, setIsRequested] = useState(true);
  const [isSent, setIsSent] = useState(true);

  const friendList = [
    { id: "1", userName: "유저1" },
    { id: "2", userName: "유저2" },
    { id: "3", userName: "유저3" },
  ];
  const handleRequested = () => {
    setIsRequested((prev) => !prev);
  };
  const handleSent = () => {
    setIsSent((prev) => !prev);
  };
  return (
    <div>
      <StatusBar />
      <Header1 title="친구 목록" edit={false} />
      <TabBarComponent
        tabs={["친구", "요청"]}
        activeTab={tab}
        onTabClick={setTab}
        size="small"
      />
      {/*요청된*/}
      <div>
        <div className="flex justify-between items-center px-4 py-2">
          <span className="text-btn3 font-semibold text-[#323232]">요청된</span>
          <button onClick={handleRequested} className="w-[2.5rem] h-[2.5rem]">
            {isRequested ? (
              <img src={up} alt="upIcon" />
            ) : (
              <img src={down} alt="downIcon" />
            )}
          </button>
        </div>
        {isRequested && (
          <div>
            {friendList.map((friend) => {
              return (
                <FriendListComponent
                  key={friend.id}
                  userName={friend.userName}
                />
              );
            })}
          </div>
        )}
      </div>
      {/*요청한*/}
      <div className="mt-4">
        <div className="flex justify-between items-center px-4 py-2">
          <span className="text-btn3 font-semibold text-[#323232]">요청한</span>
          <button onClick={handleSent} className="w-[2.5rem] h-[2.5rem]">
            {isSent ? (
              <img src={up} alt="upIcon" />
            ) : (
              <img src={down} alt="downIcon" />
            )}
          </button>
        </div>
        {isSent && (
          <div>
            {friendList.map((friend) => {
              return (
                <FriendListComponent
                  key={friend.id}
                  userName={friend.userName}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendListPage;
