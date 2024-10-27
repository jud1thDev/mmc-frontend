import { useState } from "react";
import { archiveTab } from "../../constant/archiveTab";

const MenuBar = ({ tab, handleTab }) => {
  return (
    <>
      <div className="flex gap-[1.37rem]  mx-[1rem] ">
        {archiveTab.map((it) => (
          <div>
            <div
              onClick={() => handleTab(it.id)}
              className={`flex justify-center items-center w-[3.5rem] h-[2.5rem] text-b1  ${
                tab === it.id ? "font-semibold" : "text-gray-400"
              } cursor-pointer`}
            >
              {it.name}
            </div>
            {tab === it.id && (
              <div className="w-[3rem] m-auto border-t-[0.1375rem] border-gray-800"></div>
            )}
          </div>
        ))}
      </div>
      <div className="w-[24.5625rem] border-t-[0.1375rem] border-gray-50"></div>
    </>
  );
};
export default MenuBar;
