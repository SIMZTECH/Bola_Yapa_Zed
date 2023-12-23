/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { HiPencilSquare } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";

type propsType = {
    data:any,
    index:number
}

function StadiumCard({data,index}:propsType) {
  const [isEditable,setIsEditable] = useState<boolean>(false);

  // handle toggle allow edit
  const toggleEditHandler=():void=>{
    setIsEditable(!isEditable);
  };

  return (
    <div
     className={`flex items-center justify-start mb-2 px-5 space-x-2 h-[35px] cursor-pointer ${!isEditable?'group hover:bg-orange-500':''} mx-2 rounded-md hover:bg-opacity-30 text-textDarkGreenColor text-opacity-70`}
    >
        <h3 className='group-hover:text-textDarkGreenColor'>{index+1}.</h3>
        <input 
          type='text'
          name='stadium'
          value={data?.name.toLowerCase()}
          onChange={()=>''}
          className={`flex group-hover:text-textDarkGreenColor flex-1 bg-transparent h-full focus:outline-none px-2 rounded-md placeholder:text-[14px] ${isEditable?'border-solid border-[1px] border-orange-300':''}`}
          readOnly={!isEditable}
        />
        {/* edit icon */}
        <div 
          onClick={toggleEditHandler}
          className=' h-[30px] group-hover:text-textDarkGreenColor w-[30px] text-[20px] flex items-center justify-center text-textDarkGreenColor text-opacity-50'>
          {!isEditable?<HiPencilSquare />:<IoCloseOutline />}
        </div>
    </div>
  )
}

export default StadiumCard