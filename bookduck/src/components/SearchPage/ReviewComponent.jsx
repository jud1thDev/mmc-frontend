const ReviewComponent = ({ createdTime, title, content }) => {
  const formatDate = (createdTime) => {
    const date = new Date(createdTime);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1
    const day = String(date.getDate()).padStart(2, "0");
    const formattedDate = `${year}.${month}.${day}`;
    return formattedDate;
  };
  return (
    <div className="flex flex-col py-5 gap-2 border-b-[0.0625rem] border-b-gray-100 ">
      <div className="text-c1 text-gray-400">
        <span>{formatDate(createdTime)}</span>
      </div>
      <div className="text-st text-gray-800 font-semibold">{title}</div>
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
