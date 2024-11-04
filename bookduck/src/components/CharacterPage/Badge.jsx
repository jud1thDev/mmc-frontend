import lock from "../../assets/characterPage/lock.svg";
const Badge = () => {
  return (
    <div className="flex justify-center items-center bg-gray-50 w-16 h-16 rounded-[100px]">
      <img className="w-5 h-6" src={lock} />
    </div>
  );
};
export default Badge;
