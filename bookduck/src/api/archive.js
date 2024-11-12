import { apiAuth } from "./api";

const get = async (url) => {
  const res = await apiAuth.get(url);
  return res?.data;
};

const post = async (url, data) => {
  const res = await apiAuth.post(url, data);
  return res?.data;
};

export const postExtractReview = async (data) => {
  try {
    const res = await post("/archive", data);
    console.log("발췌 및 감상평 업로드 성공", res);
    return res;
  } catch (error) {
    console.error("발췌 및 감상평 업로드 실패", error);
  }
};

export const postExtractImage = async (data) => {
  try {
    const res = await post(`/archives/excerpts/ocr`, data);
    console.log("발췌 이미지 추출 성공", res);
    return res;
  } catch (error) {
    console.error("발췌 이미지 추출 실패", error);
  }
};
