import { useState } from "react";
import BookListView from "../common/BookListView";
import SearchComponent from "../common/SearchComponent";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleRecording = () => {
    navigate("/recording");
  };

  return (
    <>
      <SearchComponent search={search} setSearch={setSearch} />
      <div className="flex flex-col mx-4 mt-[0.5rem]">
        <BookListView edit={false} handleOnClick={handleRecording} />
        <BookListView edit={false} handleOnClick={handleRecording} />
      </div>
    </>
  );
};
export default Search;
