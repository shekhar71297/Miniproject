// import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Logout=()=> {
    const navigate=useNavigate()
    const istrue =!!sessionStorage.getItem("isLogin") || false;
    console.log(istrue);
    useEffect(() => {
        if (!istrue) {
          navigate('/login');
        }
      }, [istrue, navigate]);
      window.alert("logout Successfully")
      return  sessionStorage.removeItem("isLogin")
      
    };


export default Logout
