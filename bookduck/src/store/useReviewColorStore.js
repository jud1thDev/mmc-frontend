import * as zustand from "zustand";
const create = zustand.create;

const useReviewColorStore = create((set) => ({
  reviewColor: "",
  setReviewColor: (newState) => set({ reviewColor: newState }),
}));

export default useReviewColorStore;
