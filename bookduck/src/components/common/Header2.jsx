import logo from "../../assets/common/logo-text.svg";
import setting from "../../assets/common/setting.svg";
import alarm from "../../assets/common/alarm.svg";
import friends from "../../assets/common/people.svg";

//탭 이름을 props로 받음. default 값은 "제목"
//BookDuck이 탭 이름인 경우에는 main값이 true
const Header2 = ({ title = "제목", main = true }) => {
  return (
    <div className="flex justify-between items-center h-[2.75rem]">
      {main ? (
        <img src={logo} alt="logo" />
      ) : (
        <div className="text-t2 ml-[16px] font-semibold">{title}</div>
      )}
      <div className="flex gap-[0.38rem]">
        {main && (
          <>
            <img src={friends} alt="friends" />
            <img src={alarm} alt="alarm" />
          </>
        )}
        <img src={setting} alt="setting" />
      </div>
    </div>
  );
};
export default Header2;
