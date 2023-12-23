import React from 'react';
type propsType={
    text:string,
    state:boolean,
    callback:(flag:string)=>void
}

function TabsBtn({text,state,callback}:propsType) {
  return (
    <button 
     onClick={()=>callback(text)}
    className={`w-[85px] h-full flex items-center justify-center ${state?'border-b-[1px] border-b-textDarkGreenColor bg-lightOrangeColor bg-opacity-50':''}`}>
        <div className='text-[13px] text-opacity-50 text-textDarkGreenColor font-normal '>{text}</div>
    </button>
  )
}

export default TabsBtn