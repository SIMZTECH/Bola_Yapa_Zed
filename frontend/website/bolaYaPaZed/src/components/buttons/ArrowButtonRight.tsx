import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
type propsType={
    text:string,
    callback:()=>void
}

function ArrowButtonRight({text,callback}:propsType) {
  return (
    <div className='flex cursor-pointer items-center gap-2 text-[14px] text-textDarkGreenColor text-opacity-60'>
        <h1>{text}</h1>
        <FaArrowRightLong />
    </div>
  )
}

export default ArrowButtonRight