import React from 'react';
import team01 from '../../assets/images/teams/barcelona_03.png';

function TeamCard() {
  return (
    <div className="b cursor-pointer flex basis-[25%] p-1  bg-gray-100">
        <figure className='w-[50px]'>
          <img src={team01} className='h-full w-full'/>
        </figure>
      <div className='w-full px-3 leading-5'>
      <h3 className='b text-[14px] text-textDarkGreenColor'>Barcelona</h3>
      <div className='flex items-center justify-between leading-4'>
        <h4 className='text-[11px]'>Net<br/><span className='text-[10px] font-semibold text-textDarkGreenColor px-1 bg-lightOrangeColor rounded-lg'>$3.4b</span></h4>
        <h4 className='text-[11px]'>Fans<br/><span className='text-[10px] font-semibold text-textDarkGreenColor px-1 bg-lightOrangeColor rounded-lg'>3M</span></h4>
        <p className='text-[11px]'>status<br/><span className='text-[10px] font-semibold text-textDarkGreenColor px-1 bg-lightOrangeColor rounded-lg'>active</span></p>
      </div>
      </div>
    </div>
  );
}

export default TeamCard