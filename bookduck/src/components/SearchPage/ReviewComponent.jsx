const ReviewComponent = ({ date, isPublic = false, content }) => {
  return (
    <div className="flex flex-col py-5 gap-2 border-b-[0.0625rem] border-b-gray-100 ">
      <div className="text-c1 text-gray-400">
        <span>{date} /</span>
        {isPublic ? <span> 공개</span> : <span> 비공개</span>}
      </div>
      <div
        className="text-b2 text-gray-800"
        style={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          wordBreak: "break-word",
        }}
      >
        {content}
      </div>
    </div>
  );
};

export default ReviewComponent;
