import create from "zustand";

const useReviewColorStore = create((set) => ({
  reviewColor: "",
  setReviewColor: (newState) => set({ reviewColor: newState }),
}));

export default useReviewColorStore;
