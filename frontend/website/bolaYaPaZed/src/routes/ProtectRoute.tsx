/* eslint-disable @typescript-eslint/no-explicit-any */
import React,{useContext} from 'react';
import { authContext } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

type propsType={
    children:any,
    allowedRoles:any,
}

function ProtectRoute({children,allowedRoles}:propsType) {
  const {role,token} = useContext(authContext);

  const isAllowed = allowedRoles.includes(role);
  const accessibleRoute = isAllowed && token ?children:<Navigate to={"/login"} replace={true}/>

  return accessibleRoute;
  
}

export default ProtectRoute;