import React, { Component } from 'react'
import axios from 'axios';
import{withRouter} from '../utlil/withRouter'
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBInput,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:"",
             password:""
        }
    }

    
    
    inputChangeHandler=(e)=>{
        const{name,value}=e.target;
        this.setState({[name]:value})
    }

    submitBtn=(e)=>{
      e.preventDefault()
        axios.get("http://localhost:8888/registeruser",this.state).then((res)=>{
           const istrue=res.data.some((d)=>
            this.state.email===d.email && this.state.password===d.password
           )
            if(istrue){
                sessionStorage.setItem("isLogin","true")
                // alert("Login Successfully")
                window.alert("Login successfully",JSON.stringify(this.state));
                // <Link to='/cat'/>
                this.props.router.navigate('/cat')

           
            }else{
                window.alert("please cheack your register email and password")
            }
        })    
}


    
    render() {
        const {email,password}=this.state
      
        return (
            <div>
                <form id='reset' onSubmit={this.submitBtn}>
            <MDBContainer fluid className="p-3 my-5 bg-white" style={{borderRadius:"10px"}}>

<MDBRow>

 <MDBCol col='10' md='6'>
   <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phoneimage" />
 </MDBCol>

 <MDBCol col='4' md='6'>
 <div className="divider d-flex align-items-center my-4">
     <p className="text-center fw-bold mx-3 mb-0">LOGIN</p>
   </div>

   <MDBInput wrapperClass='mb-4 mt-5' name='email' value={email}  onChange={this.inputChangeHandler} label='Email address' id='formControlLg1' type='email' size="lg"/>
   <MDBInput wrapperClass='mb-4 mt-5' name='password' value={password}  onChange={this.inputChangeHandler} label='Password' id='formControlLg' type='password' size="lg"/>


   <div className="d-flex justify-content-between mx-4 mb-4">
     <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
   <Link to='/reset'> <a href="#reset">Forgot password?</a></Link> 
   </div>
   <MDBBtn className="mb-4 w-100" size="lg">Login</MDBBtn>

 


 </MDBCol>

</MDBRow>

</MDBContainer>


 
</form>


            </div>
        )
    }
}

export default withRouter(Login)
