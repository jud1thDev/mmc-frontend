import BookListView from "../common/BookListView";
import SearchBar from "./SearchBar";
const Search = () => {
  return (
    <>
      <SearchBar />
      <div className="flex flex-col mt-[0.5rem]">
        <BookListView edit={false} />
        <BookListView edit={false} />
      </div>
    </>
  );
};
export default Search;
