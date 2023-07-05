import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const PrivateRoute = ({ children }) => {
    const navigate = useNavigate()
    const istrue = !!sessionStorage.getItem("isLogin") || false;
    console.log(istrue);
    useEffect(() => {
        if (!istrue) {
            navigate('/login');
        }
    }, [istrue, navigate]);

    return <>{children}</>;
};


export default PrivateRoute
