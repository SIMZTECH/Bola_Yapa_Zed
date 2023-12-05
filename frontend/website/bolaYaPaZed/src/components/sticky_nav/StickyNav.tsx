import React from 'react';
import { FiMenu } from "react-icons/fi";
type propsType={
    callback:()=>void
}

function StickyNav({callback}:propsType) {
  return (
    <>
      <div className='h-full flex items-center w-full'>
        {/* toggle btn */}
        <button 
            onClick={callback}
            className="text-[30px] cursor-pointer text-textDarkGreenColor">
          <FiMenu />
        </button>
        {/* team logo */}
      </div>
    </>
  );
}

export default StickyNav