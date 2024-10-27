const ReviewComponent = ({ date, isPublic = false, content }) => {
  return (
    <div className="flex flex-col px-4 py-5 gap-2">
      <div className="text-c1 text-gray-400">
        <span>{date} /</span>
        {isPublic ? <span> 공개</span> : <span> 비공개</span>}
      </div>
      <div className="text-b2 text-gray-800">{content}</div>
    </div>
  );
};

export default ReviewComponent;
