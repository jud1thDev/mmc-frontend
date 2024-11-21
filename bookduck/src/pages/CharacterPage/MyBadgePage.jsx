import { useState, useEffect } from "react";
import BadgeHeader from "../../components/CharacterPage/BadgeHeader";
import BadgeList from "../../components/CharacterPage/BadgeList";
import { getBadgeLists } from "../../api/character";
const MyBadgePage = () => {
  const [badgeData, setBadgeData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getBadgeLists();
        console.log("조회 성공: ", res);
        setBadgeData(res);
      } catch (err) {
        console.error("오류 발생: ", err);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <BadgeHeader />
      <BadgeList title="열정적인 독자" badgeData={badgeData?.readBadgeList} />
      <BadgeList
        title="꼼꼼한 기록자"
        badgeData={badgeData?.archiveBadgeList}
      />
      <BadgeList
        title="성실한 평가자"
        badgeData={badgeData?.oneLineBadgeList}
      />
      <BadgeList title="레벨업 마스터" badgeData={badgeData?.levelBadgeList} />
    </div>
  );
};

export default MyBadgePage;
