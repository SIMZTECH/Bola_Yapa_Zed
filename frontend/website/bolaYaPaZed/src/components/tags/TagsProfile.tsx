import React from 'react';

type propsType={
    value:string,
    text:string
}

function TagsProfile({value,text}:propsType) {
  return (
    <div className='flex flex-col leading-4 items-center px-2 py-1'>
        <h2 className='text-[17px] text-textDarkGreenColor font-medium'>{value}</h2>
        <p className='text-[13px] text-textDarkGreenColor'>{text}</p>
    </div>
  )
}

export default TagsProfile