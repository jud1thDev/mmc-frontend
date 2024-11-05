import { colorDefaultPalette } from "../../constant/colorDefaultPalette";

const ColorPalette = ({ palette, handleColor }) => {
  return (
    <>
      <div
        className={`${
          palette === colorDefaultPalette
            ? "grid grid-rows-4 grid-flow-col gap-7"
            : "grid grid-rows-3 grid-flow-col gap-x-[2.7rem] gap-y-5"
        } `}
      >
        {palette.map((it, index) => (
          <div
            onClick={() => handleColor(it.color)}
            key={index}
            style={{ backgroundColor: it.color }}
            className={`w-8 h-8 rounded-full cursor-pointer`}
          ></div>
        ))}
      </div>
    </>
  );
};
export default ColorPalette;
