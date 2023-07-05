import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import img from '../Assets/Images/logo.png'
import { Link } from 'react-router-dom'
import {withRouter} from '../utlil/withRouter'




export class NavBar extends Component {

  logout = (event) => {
    if (window.confirm("Are you sure you want to logout?")) {
      event.preventDefault();
      sessionStorage.removeItem("isLogin");
      this.props.router.navigate('/login')
    }
  }
  render() {
    const istrue = !!sessionStorage.getItem("isLogin");
    return (
      <div className='position-sticky-top'>
        <Navbar className='NavCss' expand="lg" varient="dark">

          <Container >
            <Link to='/cat'><img className='rounded-circle' src={img} height={70} width={70} alt='img' roundedCircle />
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav bg-lightgray" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto" >

                <Link to='/cat'><Nav.Link className='navHover' style={{ color: "gray" }} href="http://localhost:3001/" >HOME</Nav.Link></Link>


                <Link to='/about'><Nav.Link className='navHover' style={{ color: "gray" }} href="#features">ABOUT US</Nav.Link>
                </Link>

                <Link to='/gallary'><Nav.Link className='navHover' style={{ color: "gray" }} href="#gallary">GALLARY</Nav.Link></Link>

                <Link to='/service'><Nav.Link className='navHover' style={{ color: "gray" }} href="#service">SERVICE</Nav.Link></Link>

                <Link to='/CntForm'><Nav.Link className='navHover' style={{ color: "gray" }} href="#contact">CONTACT</Nav.Link></Link>

                <Link to='/feedback'> <Nav.Link className='navHover' style={{ color: "gray" }} href="#FeedBack">TESTONOMIALS</Nav.Link></Link>

                <Link to='/dash'><Nav.Link className='navHover' style={{ color: "gray" }} href="#products"><i class="fas fa-shopping-cart fs-3 ms-3 text-light"></i></Nav.Link></Link>
                <div className='d-flex mx-2' role='search'>
                  {
                    istrue ?
                      ( <button type='button'className="btn btn-warning ms-2"  onClick={this.logout} >Logout</button>
                    )
                      :
                      (<><Link to='/login'><button type='button' className='btn btn-primary ms-2'>Login</button></Link>
                        <Link to='/reg'><button type='button' className='btn btn-success ms-2' >Sign Up</button></Link></>)

                  }
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}

export default withRouter(NavBar)
