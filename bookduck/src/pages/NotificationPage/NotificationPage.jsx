import React, { useState, useEffect } from "react";
import Header3 from "../../components/common/Header3";
import StatusBar from "../../components/common/StatusBar";
import TabBarComponent from "../../components/common/TabBarComponent";
import GeneralNotiComponent from "../../components/NotificationPage/GeneralNotiComponent";
import AnnounceNotiComponent from "../../components/NotificationPage/AnnounceNotiComponent";

const NotificationPage = () => {
  const [tab, setTab] = useState("일반");

  return (
    <div className="relative">
      <StatusBar />
      <Header3 title="알림" edit={false} />
      <div>
        <TabBarComponent
          tabs={["일반", "공지"]}
          activeTab={tab}
          onTabClick={setTab}
          size="small"
          isNoti={true}
          borderWidth="3rem"
        />
      </div>

      {tab === "일반" && <GeneralNotiComponent />}
      {tab === "공지" && <AnnounceNotiComponent />}
    </div>
  );
};

export default NotificationPage;
