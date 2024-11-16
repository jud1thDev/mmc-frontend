import { create } from "zustand";

const useExtractData = create((set) => ({
  pageInputValue: "",
  extractInputValue: "",
  setPageInputValue: (extractPage) => set({ pageInputValue: extractPage }),
  setExtractInputValue: (extractContent) =>
    set({ extractInputValue: extractContent }),
  resetExtractData: () => set({ pageInputValue: "", extractInputValue: "" }),
}));

export default useExtractData;
