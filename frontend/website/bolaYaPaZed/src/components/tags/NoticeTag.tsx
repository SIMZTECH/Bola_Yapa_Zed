import React from 'react'
import { BiMessageRoundedError } from 'react-icons/bi';

type propsType={
    text:string
}

function NoticeTag({text}:propsType) {
  return (
    <div className="flex items-center gap-1 bg-lightOrangeColor px-2 py-3 rounded-md bg-opacity-30">
      <h3 className="b text-red-700 text-opacity-20 text-[25px] font-light">
        <BiMessageRoundedError />
      </h3>
      <p className="text-[12px] text-textDarkGreenColor text-opacity-40">
        {text}
      </p>
    </div>
  );
}

export default NoticeTag