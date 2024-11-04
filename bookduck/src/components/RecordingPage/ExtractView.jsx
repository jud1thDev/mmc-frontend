import ExtractComponents from "./ExtractComponents";

const ExtractView = () => {
  return (
    <div className="flex flex-col gap-[1rem] items-center h-[40rem]  mt-[1rem] overflow-y-auto">
      <ExtractComponents />
      <ExtractComponents />
      <ExtractComponents />
      <ExtractComponents />
      <ExtractComponents />
    </div>
  );
};
export default ExtractView;
