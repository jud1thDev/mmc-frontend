import { apiAuth } from "./api";
import { get, post } from "./example";

export const postRegisterBook = async (formData) => {
  try {
    const res = await apiAuth.post(`/books/custom`, formData, {
      headers: {
        "Content-Type": "multipart/formdata",
      },
    });
    console.log("책 등록 성공", res);
    return res;
  } catch (error) {
    console.error("책 등록 실패", error);
  }
};
