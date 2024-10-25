import BookListView from "../BookListView";

const Library = () => {
  return (
    <div className="flex flex-col">
      <BookListView edit={true} dropdown={true} dropdownActive={false} />
      <BookListView edit={true} dropdown={true} dropdownActive={false} />
      <BookListView edit={true} dropdown={true} dropdownActive={false} />
    </div>
  );
};
export default Library;
