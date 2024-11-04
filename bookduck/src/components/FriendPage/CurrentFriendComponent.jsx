import React from "react";
import FriendListComponent from "../common/FriendListComponent";

const CurrentFriendComponent = ({ friendList }) => {
  return (
    <div>
      {friendList.map((friend) => (
        <FriendListComponent
          key={friend.id}
          userName={friend.userName}
          text="삭제"
        />
      ))}
    </div>
  );
};

export default CurrentFriendComponent;
