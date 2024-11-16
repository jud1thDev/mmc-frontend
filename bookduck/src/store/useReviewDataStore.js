import { create } from "zustand";

const useReviewData = create((set) => ({
  reviewPage: "",
  titleInputValue: "",
  reviewInputValue: "",
  setReviewPage: (reviewPage) => set({ reviewPage }),
  setTitleInputValue: (reviewTitle) => set({ titleInputValue: reviewTitle }),
  setReviewInputValue: (reviewContent) =>
    set({ reviewInputValue: reviewContent }),
  resetReviewData: () =>
    set({ reviewPage: "", titleInputValue: "", reviewInputValue: "" }),
}));

export default useReviewData;
