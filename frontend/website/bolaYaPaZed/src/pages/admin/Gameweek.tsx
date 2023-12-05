import React from 'react'
import ClockTick from '../../components/counterClock/ClockTick';
import { BiSolidError } from "react-icons/bi";
import playerInjured01 from '../../assets/images/pd20_img04.png';
import { CgArrowRight } from "react-icons/cg";

function Gameweek() {
  return (
    <div className="rounded-md shadow-sm bg-[#F5F5F5]">
      <div className='bg-white pt-2 px-2 pb-6 rounded-tl-md rounded-tr-md'>
        <h3 className="text-[14px] text-textDarkGreenColor font-medium">
          Gameweek 9's Deadline
        </h3>
        <div className=" mt-4">
          <ClockTick />
        </div>
        <p className='w-full text-[12px] text-textDarkGreenColor mt-4'>
            Until <span className='text-[12px] font-medium'>Saturday, 20 October 2018, 11:30:00</span><br/>
            <span className=' text-textDarkGreenColor text-opacity-60'>(Central African Time)</span>
        </p>
      </div>
      <div className='pt-2'>
        <h4 className='text-[13px] text-start px-8 text-textDarkGreenColor text-opacity-50'>You have 3 injured players</h4>
        <div className='flex mt-3 items-center justify-start px-8 gap-4'>
            <div className='relative'>
                <figure className='w-[25px] h-[25px] rounded-full'>
                    <img src={playerInjured01} className='w-full h-full rounded-full object-fill'/>
                </figure>
                <span className='absolute -top-2 -left-1 text-red-600 transform -translate-x-0'><BiSolidError /></span>
            </div>
            <div className='relative'>
                <figure className='w-[25px] h-[25px] rounded-full'>
                    <img src={playerInjured01} className='w-full h-full rounded-full object-fill'/>
                </figure>
                <span className='absolute -top-2 -left-1 text-red-600 transform -translate-x-0'><BiSolidError /></span>
            </div>
            <div className='relative'>
                <figure className='w-[25px] h-[25px] rounded-full'>
                    <img src={playerInjured01} className='w-full h-full rounded-full object-fill'/>
                </figure>
                <span className='absolute -top-2 -left-1 text-red-600 transform -translate-x-0'><BiSolidError /></span>
            </div>
        </div>
        <div className='px-8 mt-3 pb-3 flex items-center cursor-pointer gap-2 text-[12px] text-textDarkGreenColor text-opacity-50'>
            <h4 className=''>Go to My Team</h4>
            <span><CgArrowRight /></span>
        </div>
      </div>
    </div>
  );
}

export default Gameweek