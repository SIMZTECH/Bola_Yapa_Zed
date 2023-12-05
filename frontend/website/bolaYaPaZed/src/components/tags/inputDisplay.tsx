/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
type propsType={
    icon:any,
    value:string,
    text:string
}

function InputDisplay({icon,value,text}:propsType) {
  return (
    <div className="b bg-lightGreenColor bg-opacity-10 text-textDarkGreenColor text-opacity-50 w-full flex gap-2 h-[40px] items-center px-5 rounded-md">
      <div className='flex gap-2 flex-1'>
        <p className="text-[13px] w-[35%]">{text} :</p>
        <div className="text-[13px] ">{value}</div>
      </div>
      <div>
        <h2 className='text-[20px]'>{icon}</h2>
      </div>
    </div>
  );
}

export default InputDisplay