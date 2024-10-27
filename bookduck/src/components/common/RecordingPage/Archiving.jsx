import BookListView from "../BookListView";

const Archiving = () => {
  return (
    <div className="flex flex-col">
      <BookListView edit={false} />
      <BookListView edit={false} />
    </div>
  );
};
export default Archiving;
