import BadgeHeader from "../../components/CharacterPage/BadgeHeader";
import BadgeList from "../../components/CharacterPage/BadgeList";
const MyBadgePage = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <BadgeHeader />
      <BadgeList title="열정적인 독자" />
      <BadgeList title="꼼꼼한 기록자" />
      <BadgeList title="성실한 평가자" />
      <BadgeList title="레벨업 마스터" />
    </div>
  );
};

export default MyBadgePage;
