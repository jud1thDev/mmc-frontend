import React, { useState } from "react";
import Header3 from "../../components/common/Header3";
import StatusBar from "../../components/common/StatusBar";
import TabBarComponent from "../../components/common/TabBarComponent";
import CurrentFriendComponent from "../../components/FriendPage/CurrentFriendComponent";
import FriendRequestComponent from "../../components/FriendPage/FriendRequestComponent";
const FriendListPage = () => {
  const [tab, setTab] = useState("친구");

  // const friendList = [
  //   { id: "1", userName: "유저1" },
  //   { id: "2", userName: "유저2" },
  //   { id: "3", userName: "유저3" },
  //   { id: "4", userName: "유저4" },
  //   { id: "5", userName: "유저5" },
  // ];
  return (
    <div>
      <StatusBar />
      <Header3 title="친구 목록" edit={false} />
      <TabBarComponent
        tabs={["친구", "요청"]}
        activeTab={tab}
        onTabClick={setTab}
        size="small"
      />
      {tab === "친구" && <CurrentFriendComponent />}
      {tab === "요청" && <FriendRequestComponent />}
    </div>
  );
};

export default FriendListPage;
