import React from 'react';
import graph from '../../assets/images/graph_img03.png';
import { CgArrowsExpandRight } from "react-icons/cg";

function PointsHistory() {
  return (
    <div className="rounded-md py-2 px-3 bg-white shadow-sm">
      {/* heading */}
      <div className="relative">
        <span className='absolute right-0 top-0 px-2 cursor-pointer py-1 text-textDarkGreenColor text-opacity-60'>
            <CgArrowsExpandRight />
        </span>
       <div className='flex items-center gap-8 pt-4'> 
        <h3 className="text-[14px] font-medium text-lightPrimaryText">
          Point history
        </h3>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-textDarkGreenColor"></div>
            <p className="text-[12px] text-textDarkGreenColor text-opacity-60">
              Current points
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-opacity-25 bg-textDarkGreenColor"></div>
            <p className="text-[12px] text-textDarkGreenColor text-opacity-60">
              Average points
            </p>
          </div>
        </div>

       </div>
      </div>
      <div className='mt-5 flex items-center gap-9'>
        <div className='leading-5'>
          <h1 className='text-[18px] font-medium text-textDarkGreenColor'>1.037</h1>
          <p className='text-[13px] text-textDarkGreenColor text-opacity-60'>Total points</p>
        </div>
        <div className='leading-5'>
          <h1 className='text-[18px] font-medium text-textDarkGreenColor'>49</h1>
          <p className='text-[13px] text-textDarkGreenColor text-opacity-60'>Avg points per GW</p>
        </div>
      </div>
      {/* image */}
      <div className='mt-2'>
        <figure>
            <img src={graph} />
        </figure>
      </div>
    </div>
  );
}

export default PointsHistory