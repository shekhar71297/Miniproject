import React from 'react';
import img1 from '../Assets/Images/reg.png'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';



function Registration() {
    const navigate=useNavigate();
    const[userReg,setUserReg]=useState(
    {
        
        fname:"",
        email:"",
        password:"",
        repass:"",
        mobno:null
        
    })
   const inputChangeHandler=(e)=>{
        const{name,value}=e.target;
      setUserReg({...userReg,[name]:value})
    
    }

   const addRecord=(e)=>{
        e.preventDefault();
      
            if(userReg.password===userReg.repass){
                setUserReg({mobno:parseInt(userReg.mobno)})
                axios.post("http://localhost:8888/registeruser",userReg).then(()=>{
                window.alert("Registration done Successfully !")
                navigate("/login") })
            } else{
                window.alert("re-Enter the password")
            }
            
       
    }
    const{fname,email,password,repass,mobno}=userReg
    return (
        <div>
            <form onSubmit={addRecord}>
           <MDBContainer fluid>

<MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
  <MDBCardBody>
    <MDBRow>
      <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

        <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

        <div className="d-flex flex-row align-items-center mb-4 ">
          <MDBIcon fas icon="user me-3" size='lg'/>
          <MDBInput label='Your Name' name='fname' value={fname}  pattern='^[a-zA-Z\s]{2,}$' required  onChange={inputChangeHandler} id='form1' type='text' className='w-100'/>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="envelope me-3" size='lg'/>
          <MDBInput label='Your Email' name='email' value={email} pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' required onChange={inputChangeHandler} id='form2' type='email'/>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="mobile me-3" size='lg'/>
          <MDBInput label='Mobno' name='mobno' value={mobno}  pattern='^[0-9]{10}$' required onChange={inputChangeHandler} id='form5' type='tel'/>
        </div>
        
        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="lock me-3" size='lg'/>
          <MDBInput label='Password' name='password' value={password} pattern='(?=.*)(?=.*[a-z])(?=.*[A-Z]).{8,}' required onChange={inputChangeHandler} id='form3' type='password'/>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon  fas icon="key me-3" size='lg'/>
          <MDBInput label='Repeat your password' name='repass' value={repass} pattern='(?=.*)(?=.*[a-z])(?=.*[A-Z]).{8,}' required onChange={inputChangeHandler} id='form4' type='password'/>
        </div>
        
       

        <div className='mb-4'>
          <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' required label='Subscribe to our newsletter' />
        </div>

        <MDBBtn className='mb-4' size='lg'>Register</MDBBtn>

      </MDBCol>

      <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
        <MDBCardImage src={img1} fluid/>
      </MDBCol>

    </MDBRow>
  </MDBCardBody>
</MDBCard>

</MDBContainer> 
</form>
      </div>    
        
    )
}

export default Registration
