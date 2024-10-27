const RegisterInput = ({ placeholder, handleInputValue, inputValue }) => {
  return (
    <input
      placeholder={placeholder}
      onChange={handleInputValue}
      value={inputValue}
      className="w-[22.5625rem] h-[2.5rem] px-[0.25rem] py-[0.5rem] border-b-[1px] border-[#dddddd]"
    />
  );
};
export default RegisterInput;
