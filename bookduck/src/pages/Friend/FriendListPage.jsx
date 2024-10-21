import React, { useState } from "react";
import Header1 from "../../components/common/Header1";
import StatusBar from "../../components/common/StatusBar";
import TabBarComponent from "../../components/common/TabBarComponent";
import FriendListComponent from "../../components/friend/FriendListComponent";
const FriendListPage = () => {
  const [tab, setTab] = useState("친구");
  const friendList = [
    { id: "1", userName: "유저1" },
    { id: "2", userName: "유저2" },
    { id: "3", userName: "유저3" },
    { id: "4", userName: "유저4" },
    { id: "5", userName: "유저5" },
  ];
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
      {friendList.map((friend) => {
        return (
          <FriendListComponent
            key={friend.id}
            userName={friend.userName}
            text="삭제"
          />
        );
      })}
    </div>
  );
};

export default FriendListPage;
