import React, { Component } from 'react'
import { MDBInput, MDBCheckbox, MDBBtn,MDBTextArea } from 'mdb-react-ui-kit';
import axios from 'axios';
export class ContactForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Fname:"",
             MobNo:"",
             Email:"",
             Message:""
             
        }
      }
    inputValchange=(e)=>{
      const{type,name,value,checked}=e.target;
      this.setState({[name]:type==="checkbox"?checked:value});
        
    }
    addContact=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:8888/Contact",this.state).then(()=>{
            window.alert("Thank you ! For contact us.")
        })
    }
    

 
    
    render() {
        const{Fname,MobNo,Email,Message}=this.state
        return (
            <div className='back d-flex'>
            <form id='form' className=' conForm mt-2 ' style={{ width: '100%', maxWidth: '300px'}}  onSubmit={this.addContact}>
      <h2>Contact us</h2>

      <MDBInput className='text-black' name='Fname' label='Name' v-model='name' wrapperClass='mb-4' value={Fname} pattern='^[a-zA-Z]{2,15}$' required onChange={this.inputValchange} />

      <MDBInput className='text-black' name='MobNo' type='tel' label='Mobile No' v-model='Mobile No' wrapperClass='mb-4' value={MobNo} pattern='^[0-9]{10}$' required onChange={this.inputValchange} />

      <MDBInput className='text-black' name='Email' type='email' label='Email' v-model='Email' wrapperClass='mb-4'pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' required value={Email} onChange={this.inputValchange} />

      <MDBTextArea className='text-black' name='Message' wrapperClass='mb-4' label='Message' value={Message} onChange={this.inputValchange} />

      <MDBCheckbox wrapperClass='d-flex justify-content-center' required label='Send me copy' />

      <MDBBtn type='submit' color='primary' block className='my-4'>
        Send
      </MDBBtn>
     

      
    </form>
    <iframe className='m-auto' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.254603095418!2d73.91420147436887!3d18.56255686789196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity!5e0!3m2!1sen!2sin!4v1686232018882!5m2!1sen!2sin" maxWidth="100%" width="50%" height="300" style={{border:"0",borderRadius:"5px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    
              
        
            </div>
        )
    }
}

export default ContactForm
