/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import FansContainer from '../fans/FansContainer';

type propsType={
    data:any
}

function FixtureEnhancedCard({data}:propsType) {
  return (
    <div className="bg-opacity-20 pb-3 px-2 py-4 rounded-lg border-b-[1px] border-b-orange-300 border-dotted">
      <div className='flex items-center justify-between'>
        {/* home */}
        <div className="flex gap-3">
          <figure className="rounded-full w-[40px] h-[40px] md:w-[80px] md:h-[80px]">
            <img src={data?.homeTeam?.logo} className="rounded-full w-full h-full object-cover" />
          </figure>
          <div className="md:pt-1 leading-3 md:leading-8 space-y-2">
            <h3 className='text-[10px] md:text-[16px] text-textDarkGreenColor'>{data?.homeTeam?.name}</h3>
            <div className="">
              <FansContainer />
            </div>
          </div>
        </div>
        {/* middle team */}
        <div className='flex flex-col items-center'>
            <h3 className='text-[13px] md:text-[20px] text-textDarkGreenColor'>VS</h3>
            <div className='flex flex-col items-center'>
                <h3 className='text-[10px] md:text-[15px] text-textDarkGreenColor'>{data?.stadium}</h3>
                <p className='text-[8px] md:text-[13px] text-textDarkGreenColor'>{data?.date} | {data?.time}</p>
            </div>
        </div>
        {/* away */}
        <div className="flex flex-row-reverse gap-3">
          <figure className="rounded-full w-[40px] h-[40px] md:w-[80px] md:h-[80px]">
            <img src={data?.awayTeam?.logo} className="rounded-full w-full h-full object-cover" />
          </figure>
          <div className="pt-1 leading-4 md:leading-8 space-y-2">
            <h3 className='text-[10px] md:text-[16px] text-textDarkGreenColor'>{data?.awayTeam?.name}</h3>
            <div className="">
              <FansContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FixtureEnhancedCard