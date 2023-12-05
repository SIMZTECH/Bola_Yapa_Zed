import React, { useEffect, useState } from 'react';
import { TransfersData,transfersDataType } from '../../assets/data/TransfersData';
import { TiMediaPlayOutline, TiMediaPlayReverseOutline } from "react-icons/ti";
import TransferCard from './TransferCard';
import ArrowButtonRight from '../../components/buttons/ArrowButtonRight';

function Transfers() {

  return (
    <div className="bg-white px-6 pt-4 rounded-md shadow-md pb-4 flex flex-col gap-5">
      <div>
        {/* header */}
        <div className="flex gap-7 items-center relative">
          <div className="flex items-center justify-center">
            <span className="absolute text-[17px] text-foregroundTextColor font-thin">
              <TiMediaPlayReverseOutline />
            </span>
            <span className="absolute text-[26px] pl-5 text-foregroundTextColor font-thin">
              <TiMediaPlayOutline />
            </span>
          </div>
          <h2 className="text-[17px] text-textDarkGreenColor font-medium">
            Top Transfers In
          </h2>
        </div>
        {/* content */}
        <div className="pt-3">
          {/* top transfer In */}
          {TransfersData.map((item: transfersDataType, index: number) => {
            if (item.transfer_status == "in") {
              return <TransferCard data={item} index={index + 1} key={index} />;
            }
          })}
        </div>
      </div>
      {/* transfers out */}
      <div>
        {/* header */}
        <div className="flex gap-7 items-center relative">
          <div className="flex items-center justify-center">
            <span className=" absolute text-[26px] text-red-600 font-thin">
              <TiMediaPlayReverseOutline />
            </span>
            <span className="absolute text-[17px] pl-5 text-red-600 font-thin">
              <TiMediaPlayOutline />
            </span>
          </div>
          <h2 className="text-[17px] text-textDarkGreenColor font-medium">
            Top Transfers Out
          </h2>
        </div>
        {/* content */}
        <div className="pt-3">
          {/* top transfer In */}
          {TransfersData.map((item: transfersDataType, index: number) => {
            if (item.transfer_status == "out") {
              return <TransferCard 
                  data={item} 
                  index={index + 1} 
                  key={index} 
              />;
            }
          })}
        </div>
        <div className='mt-8 flex items-center justify-end'>
          <ArrowButtonRight 
          text={'Details'} callback={function (): void {
            throw new Error('Function not implemented.');
          } } />
        </div>
      </div>
    </div>
  );
}

export default Transfers;