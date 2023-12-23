import React from 'react';

type propsType={
    img:string,
    control:boolean
};

function FanItem({img,control=false}:propsType) {
  return (
    <figure className={`md:w-[25px] w-[18px] md:h-[25px] h-[18px] flex items-center justify-center rounded-full  ${!control?'border-orange-500 border-[1px]':''}`}>
      {!control && <img src={img} className="w-full h-full rounded-full" />}
      {control && (
        <div className='flex items-center justify-center w-full h-full bg-blue-500 rounded-full cursor-pointer'>
          <h3 className='md:text-[11px] text-[8px] font-medium text-white'>20+</h3>
        </div>
      )}
    </figure>
  );
}

export default FanItem