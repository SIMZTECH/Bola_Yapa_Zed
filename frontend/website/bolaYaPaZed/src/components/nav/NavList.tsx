/* eslint-disable @typescript-eslint/no-explicit-any */
import { navItemsType } from '../../assets/data/Navigation';
import {NavLink} from 'react-router-dom'
type propsType={
    data:navItemsType
}

function NavList({data}:propsType) {
  return (
    <NavLink 
    to={data.path}
    className={navClass=>navClass.isActive?`border-l-4 border-l-textDarkGreenColor text-textDarkGreenColor font-semibold bg-lightGreenColor bg-opacity-20`:``}
    style={{alignItems:"center", display:"flex", height:"40px"}}>
       <div className='flex gap-3 items-center pl-5'>
        <span className='text-[20px] text-textDarkGreenColor'>{data.icon}</span>
        <h3 className='text-[14px] text-textDarkGreenColor'>{data.name}</h3>
       </div>
    </NavLink>
  )
}

export default NavList