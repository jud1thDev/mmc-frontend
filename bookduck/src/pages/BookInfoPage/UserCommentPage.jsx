import Header3 from "../../components/common/Header3";
import UserComment from "../../components/BookInfoPage/UserComment";
import Divider2 from "../../components/common/Divider2";
const UserCommentPage = () => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <Header3 title="다른 사용자들의 한줄평" />
        <div className="flex flex-col gap-1">
          <UserComment />
          <Divider2 />
          <UserComment />
          <Divider2 />
          <UserComment />
          <Divider2 />
          <UserComment />
          <Divider2 />
          <UserComment />
          <Divider2 />
        </div>
      </div>
    </div>
  );
};
export default UserCommentPage;
