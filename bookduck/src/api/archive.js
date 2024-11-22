import { apiAuth } from "./api";
import { get, post } from "./example";

export const postExtractReview = async (data) => {
  try {
    const res = await post("/archives", data);
    console.log("발췌 및 감상평 업로드 성공", res);
    return res;
  } catch (error) {
    console.error("발췌 및 감상평 업로드 실패", error);
  }
};

export const getExtractReview = async (userId, archiveType, page, size) => {
  try {
    const res = await get(
      `/users/${userId}/archives?type=${archiveType}&page=${page}&size=${size}`
    );
    console.log("발췌 및 감상평 조회 성공", res);
    return res;
  } catch (error) {
    console.error("발췌 및 감상평 조회 실패", error);
  }
};

export const postExtractImage = async (formData) => {
  try {
    const res = await apiAuth.post(`/archives/excerpts/ocr`, formData, {
      headers: {
        "Content-Type": "multipart/formdata",
      },
    });
    console.log("발췌 이미지 추출 성공", res);
    return res;
  } catch (error) {
    console.error("발췌 이미지 추출 실패", error);
  }
};
