/* eslint-disable react/prop-types */
/*사용예시
const [isToggleOn, setIsToggleOn] = useState(false);
<ToggleButton
    isOn={isToggleOn}
    onToggle={() => setIsToggleOn(!isToggleOn)}
/>
*/

const ToggleButton = ({ isOn, onToggle }) => {
  return (
    <div
      className={`w-[51px] h-[31px] flex items-center p-[2px] rounded-[100px] cursor-pointer ${
        isOn ? "bg-orange-300" : "bg-gray-100"
      }`}
      onClick={onToggle}
    >
      <div
        className={`bg-white w-[27px] h-[27px] rounded-[100px] shadow-lg transform duration-300 ease-in-out ${
          isOn ? "translate-x-5" : ""
        }`}
      />
    </div>
  );
};

export default ToggleButton;
