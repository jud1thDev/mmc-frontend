/* eslint-disable react/prop-types */
/*사용예시 
<ButtonComponent
  text="Disabled Primary"
  type="primary"
  disabled={true}
/>
<ButtonComponent
  text="Small Orange"
  type="secondary"
  color="orange"
  size="small"
  onClick={() => alert('메시지')}
/>
*/
const ButtonComponent = ({
  text,
  type = "primary",
  color = "gray",
  size = "medium",
  onClick,
  disabled = false,
  ...props
}) => {
  const baseStyles = "text-center";

  const primaryEnabledStyle = "bg-orange-400 text-white";
  const primaryDisabledStyle = "bg-gray-100 text-white cursor-not-allowed";

  const secondaryColorStyles = {
    orange: "bg-orange-300 text-white",
    white: "bg-white text-gray-600",
    gray: "bg-gray-600 text-white",
  };

  const sizeStyles = {
    small: "px-[12px] py-[4px] font-regular text-b3",
    medium: "px-[16px] py-[8px] font-regular text-base",
  };

  const buttonStyles =
    type === "primary"
      ? `${baseStyles} w-[361px] h-[48px] font-semibold rounded-[8px] ${
          disabled ? primaryDisabledStyle : primaryEnabledStyle
        }`
      : `${baseStyles} ${sizeStyles[size]} rounded-[6px] ${secondaryColorStyles[color]}`;

  return (
    <button
      className={buttonStyles}
      onClick={!disabled ? onClick : null}
      disabled={disabled}
      {...props}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
