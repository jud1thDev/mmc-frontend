import { apiAuth } from "./api";

const get = async (url) => {
  const res = await apiAuth.get(url);
  return res?.data;
};

const post = async (url, data) => {
  const res = await apiAuth.post(url, data);
  return res?.data;
};

// 한줄평,별점 목록 조회
export const getBookInfo = async ({ bookinfoId }) => {
  try {
    const res = await get(`/bookinfo/${bookinfoId}`);
    console.log("책정보 조회 성공: ", res);
    return res;
  } catch (error) {
    console.error("책정보 조회 실패: ", error);
    throw error;
  }
};

// 한줄평,별점 목록 조회
export const getOneLineRatingsInfo = async ({
  bookinfoId,
  orderBy,
  page,
  size,
}) => {
  try {
    const res = await get(
      `/bookinfo/${bookinfoId}/onelineratings?orderBy=${orderBy}&page=${page}&size=${size}`
    );
    console.log("한줄평 목록 조회 성공: ", res);
    return res;
  } catch (error) {
    console.error("한줄평 목록 조회 실패: ", error);
    throw error;
  }
};
