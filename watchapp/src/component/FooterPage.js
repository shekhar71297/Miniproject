import React, { Component } from 'react'
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
 
} from 'mdb-react-ui-kit';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

export class FooterPage extends Component {
  render() {
    return (
      <div>
        
        <MDBFooter className='bg-black text-center text-white'>
          
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#55acee' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#333333' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3 text-dark' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <h5 className='text-dark'>Designed by <strong>Shekhar R. Powar</strong></h5>
        <div>
        <i class="fab fa-cc-visa fs-2 p-3"></i>
        <i class="fab fa-paypal fs-2  p-3"></i>
        <i class="fab fa-cc-mastercard  p-3 fs-2"></i>
        <i class="fab fa-cc-amazon-pay  p-3 fs-2"></i>
        <i class="fab fa-cc-apple-pay  p-3 fs-2"></i>
        <i class="fab fa-google-pay  p-3 fs-2"></i>
        </div>
      </div>
    </MDBFooter>

      </div>
    )
  }
}

export default FooterPage
