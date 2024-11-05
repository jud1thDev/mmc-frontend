import * as zustand from "zustand";
const create = zustand.create;

const useBookListStore = create((set) => ({
  bookList: [],
  setBookList: (newState) => set({ bookList: newState }),
}));

export default useBookListStore;
