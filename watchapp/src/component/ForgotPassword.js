import React, { Component } from 'react'
import img1 from '../Assets/Images/reg.png'
import axios from 'axios';


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
export class ForgotPassword extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          
             email:"",
             password:"",
             repass:"",
            //  mobno:""
        }
    }
    
    inputChangeHandler=(e)=>{
        const{name,value}=e.target;
        this.setState({[name]:value})
    }
   
    
    updatePass=(e)=>{
    e.preventDefault();
        axios.get("http://localhost:8888/registeruser").then((res)=>{
            console.log(res.data);
            const dataMatch=res.data.some((d)=>this.state.email===d.email)
            console.log(dataMatch);
            if(dataMatch){
             const   eObj={
                    email:this.state.email,
                    password:this.state.password,
                    repass:this.state.repass
                }
                console.log(eObj);

                axios.put(`http://localhost:8888/registeruser`,eObj).then(()=>{
                    window.alert("Password updated successfully")
                })
            } else{
                window.alert("Please check email id")
            }
        })

 
    }
    

    render() {
        const{email,password,repass}=this.state
        return (
            <div>
            <form onSubmit={this.updatePass}>
           <MDBContainer fluid>

<MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
  <MDBCardBody>
    <MDBRow>
      <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

        <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Password Reset</p>

      

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="envelope me-3" size='lg'/>
          <MDBInput label='Your Email' name='email' value={email} onChange={this.inputChangeHandler} id='form2' type='email'/>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="lock me-3" size='lg'/>
          <MDBInput label='Password' name='password' value={password} onChange={this.inputChangeHandler} id='form3' type='password'/>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="key me-3" size='lg'/>
          <MDBInput label='Repeat your password' name='repass' value={repass} onChange={this.inputChangeHandler} id='form4' type='password'/>
        </div>

        <div className='mb-4'>
          <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
        </div>

        <MDBBtn className='mb-4' size='lg'>Reset</MDBBtn>

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
}

export default ForgotPassword
