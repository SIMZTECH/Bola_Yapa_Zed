import React from 'react';
import { transfersDataType } from '../../assets/data/TransfersData';
type propsType={
    data:transfersDataType,
    index:number
}

function TransferCard({data,index}:propsType) {
  return (
    <div>
      <div className="flex items-center gap-8 mb-3 mt-3">
        <div className="flex items-center justify-between w-[15%]">
          <h1 className=" w-[50%] text-textDarkGreenColor text-opacity-60 text-[14px] font-medium">
            {index}.
          </h1>
          <div className='b items-start flex-1'>
            <h1 className=" text-textDarkGreenColor text-opacity-60 text-[14px] font-medium">
              {data.role.toUpperCase()}
            </h1>
          </div>
        </div>
        <figure className="w-[25px] h-[25px] rounded-full">
          <img
            src={data.profile_img}
            className="w-full h-full object-cover rounded-full"
          />
        </figure>
        <div className="flex flex-1 justify-between">
          <h1 className="w-[40%] text-[14px] text-textDarkGreenColor font-medium">{data.name}</h1>
          <div className="flex-1 ">
            <h1 className="w-full text-[14px] text-textDarkGreenColor text-opacity-60">{data.team.toUpperCase().slice(0,3)}</h1>
          </div>
          <p className={`text-[14px] ${data.transfer_status=="in"?'text-foregroundTextColor':'text-red-600'}`}>{data.net_worth}</p>
        </div>
      </div>
    </div>
  );
}

export default TransferCard