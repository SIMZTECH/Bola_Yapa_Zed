import React from 'react';
import { IoMdPlay } from "react-icons/io";
type propsType={
    img:string,
    title:string,
    description:string
}

function VideoCard({img,title,description}:propsType) {
  return (
    <div className="rounded-md bg-white pb-2 shadow-md">
      <div>
        <figure className="rounded-md relative">
          <img src={img} className="rounded-tl-md rounded-tr-md" />
          <div className="absolute top-0 left-0 bottom-0 right-0 px-5 py-1 pt-3 bg-opacity-50 bg-black rounded-tl-md rounded-tr-md">
            <div className='relative h-full'>
              <h3 className="text-white text-[15px]">Latest Laliga Videos</h3>
              <p className='absolute bottom-1 h-[20px] text-[14px] flex items-center justify-center px-1 rounded-md bg-primaryOrangeColor text-white'>02:43</p>
              <div className='h-[35px] w-[35px] rounded-full bg-primaryOrangeColor shadow-md flex items-center 
              justify-center text-[16px] text-white font-medium cursor-pointer absolute -bottom-4 right-3'>
                <IoMdPlay/>
              </div>
            </div>
          </div>
        </figure>
        <div className="pt-2 px-3 pb-1">
          <h3 className="text-[15px] text-textDarkGreenColor font-medium">
            {title}
          </h3>
          <p className="text-[14px] text-textDarkGreenColor text-opacity-60">
            {description}
          </p>
          <h4 className='mt-3 w-full text-end text-[13px] text-textDarkGreenColor text-opacity-70'>3 minutes ago</h4>
        </div>
      </div>
      
    </div>
  );
}

export default VideoCard