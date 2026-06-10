import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router';
import Navbar from '../components/Navbar';

const ProtectedRouteCom = () => {


    const { pathname } = useLocation();
    console.log('Path: ', pathname);
    const isAuthenticated = JSON.parse(localStorage.getItem('userAuthStatus')) || false;
    return isAuthenticated ?
        <>
            <Navbar />
            <Outlet />
        </>
        :
        <Navigate
            to={'/login'}
            replace
        />
}

export default ProtectedRouteCom;
