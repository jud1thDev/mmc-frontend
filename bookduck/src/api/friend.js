import { apiAuth } from "./api";
//친구 목록 조회
export const getFriendList = async () => {
  try {
    const response = await apiAuth.get(`/friends`);
    return response;
  } catch (error) {
    console.error(error);
  }
};
//친구 삭제
export const deleteFriend = async (friendId) => {
  try {
    await apiAuth.delete(`/friends/${friendId}`);
  } catch (error) {
    console.error(error);
  }
};

/*요청된*/
//받은 친구 목록 조회
export const getReceivedFriendList = async () => {
  try {
    const response = await apiAuth.get(`/friendrequests/received`);
    return response;
  } catch (error) {
    console.error(error);
  }
};

//친구 요청 거절
export const putFriendRequest = async (friendRequestId) => {
  try {
    const response = await apiAuth.put(
      `/friendrequests/${friendRequestId}/reject`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

//친구 요청 수락
export const postFriendRequest = async (friendRequestId) => {
  try {
    await apiAuth.post(`/friends`, {
      friendRequestId: friendRequestId,
    });
  } catch (error) {
    console.error(error);
  }
};

/*요청한*/
//보낸 친구 목록 조회
export const getSentFriendList = async () => {
  try {
    const response = await apiAuth.get(`/friendrequests/sent`);
    return response;
  } catch (error) {
    console.error(error);
  }
};

//친구 요청취소
export const deleteFriendRequest = async (friendRequestId) => {
  try {
    const response = await apiAuth.delete(`/friendrequests/${friendRequestId}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};
