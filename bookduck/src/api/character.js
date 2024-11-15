import { apiAuth } from "./api";

const get = async (url) => {
  const res = await apiAuth.get(url);
  return res?.data;
};

const post = async (url, data) => {
  const res = await apiAuth.post(url, data);
  return res?.data;
};

// 유저 정보 조회 - 닉네임, 기록 수
export const getUserInfo = async (userId) => {
  try {
    const res = await get(`/users/${userId}`);
    console.log("유저 정보 조회 성공: ", res);
    return res;
  } catch (error) {
    console.error("유저 정보 조회 실패: ", error);
    throw error;
  }
};

// 유저 독서 리포트 조회 - 통계
export const getUserLevelInfo = async (userId) => {
  try {
    const res = await get(`/users/${userId}/growth`);
    console.log("유저 레벨 정보 조회 성공: ", res);
    return res;
  } catch (error) {
    console.error("유저 레벨 정보 조회 실패: ", error);
    throw error;
  }
};
