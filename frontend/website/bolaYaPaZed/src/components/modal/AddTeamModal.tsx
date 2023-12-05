import React from 'react';
import { IoCloseSharp } from "react-icons/io5";
type propsType={
    isOpen:boolean,
    callBack:(flag:boolean)=>void
}


function AddTeamModal({isOpen,callBack}:propsType) {
  return (
    <>
      {isOpen && (
        <div className="absolute bg-black top-0 left-0 h-full w-full bg-opacity-40 z-30">
          <div className="w-full sm:max-w-[850px] bg-white mx-auto mt-[5%] sm:py-4 md:px-8 rounded-md relative">
            <button
                onClick={()=>callBack(!isOpen)} 
                className='text-[25px] bg-textDarkGreenColor w-[30px] h-[30px] rounded-full flex items-center 
            justify-center cursor-pointer text-white absolute -top-1 -right-1'>
                <IoCloseSharp />
            </button>
            <div>
              <h1>am here</h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AddTeamModal