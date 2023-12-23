/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { CiSearch } from "react-icons/ci";
import { ClipLoader } from 'react-spinners';

type propsType={
    text:string,
    callback:(e:any)=>Promise<any>,
    value:string,
    onChangeText:any,
    loader:boolean

}

function SearchBar({text,callback,value,onChangeText,loader}:propsType) {
  return (
    <form 
      method='post'
      onSubmit={callback}
      className='h-[35px] w-full bg-opacity-40 shadow-sm bg-lightOrangeColor rounded-xl px-3 flex items-center'>
      <button 
        type='submit'
        className='h-full w-[25px] text-[17px] text-textDarkGreenColor flex items-center justify-center text-opacity-70'
        >
        {loader?<ClipLoader color='orange' size={13}/> :<CiSearch />}
      </button>
      <input
        className='b placeholder:text-[13px] h-full focus:outline-none text-[13px] text-textDarkGreenColor text-opacity-70 
        w-full bg-transparent placeholder:text-textDarkGreenColor placeholder:text-opacity-70 px-4 '
        placeholder={`${text}`}
        type="text"
        required
        name='search'
        value={value}
        onChange={(e:any)=>onChangeText(e.target.value)}
      />
    </form>
  );
}

export default SearchBar