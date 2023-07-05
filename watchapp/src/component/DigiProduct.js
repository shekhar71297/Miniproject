import React, { Component } from 'react'
import constantData from '../shared/Constant'
// import { Link } from 'react-router-dom'
import axios from 'axios';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
} from "mdb-react-ui-kit";

import { connect } from 'react-redux'
import * as productAction from '../action/ProductAction'



export class DigiProduct extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pId: "",
      pName: "",
      pType: "",
      pPrice: null,
    }
  }
  componentDidMount() {
    // this.fetchData()
    this.props.initProductRequest()
  }
  addProduct1 = (e) => {
    this.setState({ pId: this.state.pId = "TSW1", pName: this.state.pName = "Titan Sliver", pType: this.state.pType = "Unisex", pPrice: this.state.pPrice = 999 });
    e.preventDefault();

    this.props.addProductRequest(this.state)
    window.alert("product added successfully")
  }

  addProduct2 = (a) => {
    this.setState({ pId: this.state.pId = "FSEnvy1", pName: this.state.pName = "Fastrack sliver", pType: this.state.pType = "Unisex", pPrice: this.state.pPrice = 1099 });
    a.preventDefault();

    this.props.addProductRequest(this.state)
    window.alert("Product added Successfully")

  }

  addProduct3 = (b) => {
    this.setState({ pId: this.state.pId = "FSBLACK", pName: this.state.pName = "Fastrack-Black", pType: this.state.pType = "Unisex", pPrice: this.state.pPrice = 1299 });
    b.preventDefault();
    this.props.addProductRequest(this.state)
    window.alert("Product added Successfully")
  }

  addProduct4 = (c) => {
    this.setState({ pId: this.state.pId = "SW1", pName: this.state.pName = "Sonata", pType: this.state.pType = "Unisex", pPrice: this.state.pPrice = 1299 });
    c.preventDefault();
    this.props.addProductRequest(this.state)
    window.alert("Product added Successfully")
  }

  addProduct5 = (d) => {
    this.setState({ pId: this.state.pId = "MX1", pName: this.state.pName = "Maxima-Blue", pType: this.state.pType = "Unisex", pPrice: this.state.pPrice = 1299 });
    d.preventDefault();
    this.props.addProductRequest(this.state)
    window.alert("Product added Successfully")
  }

  addProduct6 = (f) => {
    this.setState({ pId: this.state.pId = "TW2", pName: this.state.pName = "Titan", pType: this.state.pType = "Unisex", pPrice: this.state.pPrice = 1299 });
    f.preventDefault();
    this.props.addProductRequest(this.state)
    window.alert("Product added Successfully")
  }





  render() {
    return (
      <div>
        <MDBContainer fluid className="my-5">
          <MDBRow>
            <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
              <MDBCard style={{ height: "500px", width: "300px" }}>
                <div className="d-flex justify-content-between p-3">
                  <p className="lead mb-0">Today's Combo Offer</p>
                  <div
                    className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                    style={{ width: "35px", height: "35px" }}
                  >
                    <p className="text-white mb-0 small">x4</p>
                  </div>
                </div>
                <MDBCardImage
                  src={constantData.digi1}
                  position="top"
                  alt="watch"
                  height={250}
                  width={150}
                />
                <MDBCardBody>
                  <div className="d-flex justify-content-between">
                    <p className="small">
                      <a href="#!" className="text-muted">
                        Watch
                      </a>
                    </p>
                    <p className="small text-danger">
                      <s>₹1099</s>
                    </p>
                  </div>

                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0" >Titan Sliver</h5>
                    <h5 className="text-dark mb-0">₹999</h5>
                  </div>

                  <div class="d-flex justify-content-between mb-2">
                    <p class="text-muted mb-0">
                      Available: <span class="fw-bold">6</span>
                    </p>
                    <div class="ms-auto text-warning">
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                    </div>
                  </div>
                  <div>
                    <button style={{ marginLeft: "5px" }} className='btn btn-info' onClick={this.addProduct1} type='button'><i class="fas fa-cart-plus"></i></button>

                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
              <MDBCard style={{ height: "500px", width: "300px" }}>
                <div className="d-flex justify-content-between p-3">
                  <p className="lead mb-0">Today's Combo Offer</p>
                  <div
                    className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                    style={{ width: "35px", height: "35px" }}
                  >
                    <p className="text-white mb-0 small">x2</p>
                  </div>
                </div>
                <MDBCardImage
                  src={constantData.digi2}
                  position="top"
                  alt="watch"
                  height={250}
                  width={150}
                />
                <MDBCardBody>
                  <div className="d-flex justify-content-between">
                    <p className="small">
                      <a href="#!" className="text-muted">
                        Watch
                      </a>
                    </p>
                    <p className="small text-danger">
                      <s>₹1199</s>
                    </p>
                  </div>

                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">fastrack Envy</h5>
                    <h5 className="text-dark mb-0">₹1099</h5>
                  </div>

                  <div class="d-flex justify-content-between mb-2">
                    <p class="text-muted mb-0">
                      Available: <span class="fw-bold">7</span>
                    </p>
                    <div class="ms-auto text-warning">
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon far icon="star" />
                    </div>
                  </div>
                  <div>
                    <button style={{ marginLeft: "5px" }} className='btn btn-info' onClick={this.addProduct2} type='button'><i class="fas fa-cart-plus"></i></button>

                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
              <MDBCard style={{ height: "500px", width: "300px" }}>
                <div className="d-flex justify-content-between p-3">
                  <p className="lead mb-0">Today's Combo Offer</p>
                  <div
                    className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                    style={{ width: "35px", height: "35px" }}
                  >
                    <p className="text-white mb-0 small">x3</p>
                  </div>
                </div>
                <MDBCardImage
                  src={constantData.digi3}
                  position="top"
                  alt="watch"
                  height={250}
                  width={150}
                />
                <MDBCardBody>
                  <div className="d-flex justify-content-between">
                    <p className="small">
                      <a href="#!" className="text-muted">
                        Watch
                      </a>
                    </p>
                    <p className="small text-danger">
                      <s>₹1399</s>
                    </p>
                  </div>

                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">Fastrack-Black</h5>
                    <h5 className="text-dark mb-0">₹1299</h5>
                  </div>

                  <div class="d-flex justify-content-between mb-2">
                    <p class="text-muted mb-0">
                      Available: <span class="fw-bold">5</span>
                    </p>
                    <div class="ms-auto text-warning">
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star-half-alt" />
                    </div>
                  </div>
                  <div>
                    <button style={{ marginLeft: "5px" }} className='btn btn-info' onClick={this.addProduct3} type='button'><i class="fas fa-cart-plus"></i></button>

                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol md="12" lg="4" className="mb-4 mb-lg-0 mt-2">
              <MDBCard style={{ height: "500px", width: "300px" }}>
                <div className="d-flex justify-content-between p-3">
                  <p className="lead mb-0">Today's Combo Offer</p>
                  <div
                    className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                    style={{ width: "35px", height: "35px" }}
                  >
                    <p className="text-white mb-0 small">x3</p>
                  </div>
                </div>
                <MDBCardImage
                  src={constantData.digi4}
                  position="top"
                  alt="watch"
                  height={250}
                  width={150}
                />
                <MDBCardBody>
                  <div className="d-flex justify-content-between">
                    <p className="small">
                      <a href="#!" className="text-muted">
                        Watch
                      </a>
                    </p>
                    <p className="small text-danger">
                      <s>₹1399</s>
                    </p>
                  </div>

                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">Sonata </h5>
                    <h5 className="text-dark mb-0">₹1299</h5>
                  </div>

                  <div class="d-flex justify-content-between mb-2">
                    <p class="text-muted mb-0">
                      Available: <span class="fw-bold">5</span>
                    </p>
                    <div class="ms-auto text-warning">
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star-half-alt" />
                    </div>
                  </div>
                  <div>
                    <button style={{ marginLeft: "5px" }} className='btn btn-info' onClick={this.addProduct4} type='button'><i class="fas fa-cart-plus"></i></button>

                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol md="12" lg="4" className="mb-4 mb-lg-0 mt-2">
              <MDBCard style={{ height: "500px", width: "300px" }}>
                <div className="d-flex justify-content-between p-3">
                  <p className="lead mb-0">Today's Combo Offer</p>
                  <div
                    className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                    style={{ width: "35px", height: "35px" }}
                  >
                    <p className="text-white mb-0 small">x3</p>
                  </div>
                </div>
                <MDBCardImage
                  src={constantData.digi5}
                  position="top"
                  alt="Watch"
                  height={250}
                  width={150}
                />
                <MDBCardBody>
                  <div className="d-flex justify-content-between">
                    <p className="small">
                      <a href="#!" className="text-muted">
                        Watch
                      </a>
                    </p>
                    <p className="small text-danger">
                      <s>₹1399</s>
                    </p>
                  </div>

                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">Maxima-Blue</h5>
                    <h5 className="text-dark mb-0">₹1299</h5>
                  </div>

                  <div class="d-flex justify-content-between mb-2">
                    <p class="text-muted mb-0">
                      Available: <span class="fw-bold">5</span>
                    </p>
                    <div class="ms-auto text-warning">
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star-half-alt" />
                    </div>
                  </div>
                  <div>
                    <button style={{ marginLeft: "5px" }} className='btn btn-info' onClick={this.addProduct5} type='button'><i class="fas fa-cart-plus"></i></button>

                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol md="12" lg="4" className="mb-4 mb-lg-0 mt-2">
              <MDBCard style={{ height: "500px", width: "300px" }}>
                <div className="d-flex justify-content-between p-3">
                  <p className="lead mb-0">Today's Combo Offer</p>
                  <div
                    className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                    style={{ width: "35px", height: "35px" }}
                  >
                    <p className="text-white mb-0 small">x3</p>
                  </div>
                </div>
                <MDBCardImage
                  src={constantData.digi6}
                  position="top"
                  alt="watch"
                  height={250}
                  width={150}
                />
                <MDBCardBody>
                  <div className="d-flex justify-content-between">
                    <p className="small">
                      <a href="#!" className="text-muted">
                        Watch
                      </a>
                    </p>
                    <p className="small text-danger">
                      <s>₹1399</s>
                    </p>
                  </div>

                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">Titan</h5>
                    <h5 className="text-dark mb-0">₹1299</h5>
                  </div>

                  <div class="d-flex justify-content-between mb-2">
                    <p class="text-muted mb-0">
                      Available: <span class="fw-bold">5</span>
                    </p>
                    <div class="ms-auto text-warning">
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star-half-alt" />
                    </div>
                  </div>
                  <div>
                    <button style={{ marginLeft: "5px" }} className='btn btn-info' onClick={this.addProduct6} type='button'><i class="fas fa-cart-plus"></i></button>

                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

      </div>
    )
  }
}

// const mapStateToProps = (state) => ({
//   allProducts: state.productStore.allProducts

// })
const mapDispatchToProps = (dispatch) => ({
  addProductRequest: (data) => dispatch(productAction.addProduct(data)),
  initProductRequest: () => dispatch(productAction.getAllproducts())
  // deleteProductRequest:(id)=>dispatch(productAction.deleteProduct(id))

})

export default connect(null, mapDispatchToProps)(DigiProduct)
