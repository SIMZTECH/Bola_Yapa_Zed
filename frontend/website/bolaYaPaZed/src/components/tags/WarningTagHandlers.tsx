import React from 'react';
import { CiWarning } from "react-icons/ci";
import { IoIosAdd } from "react-icons/io";
import { IoAdd } from 'react-icons/io5';

type propsType={
    text:string
    control:boolean
};

function WarningTagHandlers({text,control=false}:propsType) {
  return (
    <div className="w-full flex h-[40px] bg-red-200 px-5 rounded-md">
      <div className="flex items-center justify-between w-full">
        <div className="w-[10%] text-[25px] text-red-800 font-medium">
          <CiWarning />
        </div>
        <p className="flex flex-1 text-[15px] text-textDarkGreenColor">
          {text}
        </p>
        {control && (
          <button className="w-[30px] h-[30px] text-white rounded-full cursor-pointer flex items-center justify-center text-[25px] bg-red-400">
            <IoAdd />
          </button>
        )}
      </div>
    </div>
  );
}

export default WarningTagHandlers