import { apiAuth } from "./api";

const get = async (url) => {
  const res = await apiAuth.get(url);
  return res?.data;
};

const post = async (url, data) => {
  const res = await apiAuth.post(url, data);
  return res?.data;
};

export const getTotalBook = async () => {
  try {
    const res = await post("/books/list");
    console.log("내 서재 전체 조회 성공", res);
    return res;
  } catch (error) {
    console.error("내 서재 전체 조회 실패");
  }
};
