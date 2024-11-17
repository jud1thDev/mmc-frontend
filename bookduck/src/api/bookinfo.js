import { apiAuth } from "./api";

const get = async (url) => {
  const res = await apiAuth.get(url);
  return res?.data;
};

const post = async (url, data) => {
  const res = await apiAuth.post(url, data);
  return res?.data;
};

const patch = async (url, data) => {
  const res = await apiAuth.patch(url, data);
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
    // Query Parameter 생성 (값이 존재하는 경우에만 추가)
    const queryParams = new URLSearchParams();
    if (orderBy) queryParams.append("orderBy", orderBy);
    if (page) queryParams.append("page", page);
    if (size) queryParams.append("size", size);

    // 최종 URL
    const url = `/bookinfo/${bookinfoId}/onelineratings${
      queryParams.toString() ? `?${queryParams}` : ""
    }`;

    const res = await get(url);
    console.log("한줄평 목록 조회 성공: ", res);
    return res;
  } catch (error) {
    console.error("한줄평 목록 조회 실패: ", error);
    throw error;
  }
};
// 별점 등록 및 수정
export const enrollRating = async (userbookId, rating) => {
  const url = `books/${userbookId}/rating`;
  const data = { rating };
  try {
    const res = await patch(url, data);
    console.log("별점 등록 성공: ", res);
    return res?.data;
  } catch (error) {
    console.error("별점 등록 실패:", error);
    throw error;
  }
};
