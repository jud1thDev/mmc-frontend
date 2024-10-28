import { useState } from "react";
import BookListView from "../common/BookListView";
import SearchComponent from "../common/SearchComponent";
import SearchBar from "./SearchBar";

const Search = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <SearchComponent search={search} setSearch={setSearch} />
      <div className="flex flex-col mx-4 mt-[0.5rem]">
        <BookListView edit={false} />
        <BookListView edit={false} />
      </div>
    </>
  );
};
export default Search;
