import BookListView from "../BookListView";
import SearchBar from "./SerachBar";
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
