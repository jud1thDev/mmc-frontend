import { create } from "zustand";

const useBookInfoStore = create((set) => ({
  bookInfo: {},
  setBookInfo: (newState) => set({ bookInfo: newState }),
}));

export default useBookInfoStore;
