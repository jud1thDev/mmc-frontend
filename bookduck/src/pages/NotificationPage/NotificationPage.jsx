import React, { useState, useEffect } from "react";
import Header3 from "../../components/common/Header3";
import StatusBar from "../../components/common/StatusBar";
import TabBarComponent from "../../components/common/TabBarComponent";
import GeneralNotiComponent from "../../components/NotificationPage/GeneralNotiComponent";
import AnnounceNotiComponent from "../../components/NotificationPage/AnnounceNotiComponent";
import { useSSE } from "../../context/SSEProvider";

const NotificationPage = () => {
  const [tab, setTab] = useState("일반");
  const { sseData } = useSSE();
  const [dotStates, setDotStates] = useState([false, false]);

  useEffect(() => {
    if (sseData) {
      const newDotStates = [
        sseData.isCommonAlarmChecked === null
          ? null
          : !sseData.isCommonAlarmChecked,
        sseData.isAnnouncementChecked === null
          ? null
          : !sseData.isAnnouncementChecked,
      ];
      console.log("업데이트된 dotStates:", newDotStates);
      setDotStates(newDotStates);
    }
  }, [sseData]);

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
          dotStates={dotStates}
        />
      </div>

      {tab === "일반" && <GeneralNotiComponent />}
      {tab === "공지" && <AnnounceNotiComponent />}
    </div>
  );
};

export default NotificationPage;
