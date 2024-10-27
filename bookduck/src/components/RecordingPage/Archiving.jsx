import BookListView from "../common/BookListView";

const Archiving = () => {
  return (
    <div className="flex flex-col">
      <BookListView edit={false} />
      <BookListView edit={false} />
    </div>
  );
};
export default Archiving;
