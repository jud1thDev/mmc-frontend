import lock from "../../assets/characterPage/lock.svg";
const Badge = (badgeInfo) => {
  const badge = badgeInfo?.badgeInfo;
  return (
    <div className="flex justify-center items-center w-16 h-16 cursor-pointer">
      {badgeInfo?.isOwned ? (
        <img
          src={`assets/characterPage/badges/${badge?.badgeType}/${badge?.badgeName}.png`}
          alt={`${badge?.badgeName} badge`}
        />
      ) : (
        <div className="flex justify-center items-center bg-gray-50 w-16 h-16 rounded-[100px]">
          <img className="w-5 h-6" src={lock} />
        </div>
        // <img
        //   className="w-16 h-16"
        //   src={`assets/characterPage/badges/${badge?.badgeType}/${badge?.badgeName}.png`}
        //   alt={`${badge?.badgeName} badge`}
        // />
      )}
    </div>
  );
};
export default Badge;
