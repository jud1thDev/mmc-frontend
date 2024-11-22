import ExtractComponents from "./ExtractComponents";
import ReviewComponents from "./ReviewComponents";

const TotalView = ({ archiveData }) => {
  console.log(archiveData.archiveList);
  return (
    <div className="flex flex-col gap-[1rem] items-center mt-[1rem]">
      {archiveData.archiveList.map((it, index) => (
        <>
          {it.type === "EXCERPT" ? (
            <ExtractComponents
              page={it.data.pageNumber}
              content={it.data.excerptContent}
              excerptId={it.data.excerptId}
              title={it.title}
              author={it.author}
            />
          ) : (
            <ReviewComponents
              page={it.data.pageNumber}
              content={it.data.reviewContent}
              reviewId={it.data.reviewId}
              reviewTitle={it.data.reviewTitle}
              title={it.title}
              author={it.author}
            />
          )}
        </>
      ))}
    </div>
  );
};
export default TotalView;
