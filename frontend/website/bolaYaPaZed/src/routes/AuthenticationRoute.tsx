import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Register from '../pages/auth/Registration.tsx';
import Login from '../pages/auth/Login.tsx';
import AdminLayout from '../layouts/AdminLayout.tsx';
import ProtectRoute from './ProtectRoute.tsx';



function AuthenticationRoute() {
  return (
    <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path="/admin/*" element={<ProtectRoute allowedRoles={["admin"]} ><AdminLayout/></ProtectRoute>}/>
    </Routes>
  )
}

export default AuthenticationRoute;