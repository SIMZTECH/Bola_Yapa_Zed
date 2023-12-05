import React from 'react';
import { fixureDataType } from '../../assets/data/FixturesData';

type propsType={
    data:fixureDataType
}

function FixureCard({data}:propsType) {
  return (
    <div className="bg-white rounded-md h-[60px] mb-3 shadow-md">
      <div className='flex h-full items-center'>
        <div className="flex items-center gap-2 basis-[50%] px-4">
          <figure className="h-[25px] w-[25px] rounded-full">
            <img
              src={data.homeTeam_img}
              className="w-full h-full object-cover"
            />
          </figure>
          <h1 className="b text-[17px] font-medium text-textDarkGreenColor">
            v
          </h1>
          <figure className="h-[25px] w-[25px] rounded-full">
            <img
              src={data.awayTeam_img}
              className="w-full h-full object-cover"
            />
          </figure>
        </div>
        <div className='basis-[50%] flex flex-col leading-4'>
          {/* time */}
          <h3 className='text-[14px] font-semibold text-textDarkGreenColor'>{data.time}</h3>
          {/* stadium */}
          <p className='text-[13px] text-opacity-60 text-textDarkGreenColor'>{data.stadium_name}</p>
        </div>
      </div>
    </div>
  );
}

export default FixureCard