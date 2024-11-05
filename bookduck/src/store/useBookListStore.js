import create from "zustand";

const useBookListStore = create((set) => ({
  bookList: [],
  setBookList: (newState) => set({ bookList: newState }),
}));

export default useBookListStore;
