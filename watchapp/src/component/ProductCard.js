import React, { Component } from 'react'
import constantData from '../shared/Constant'
import { Link } from 'react-router-dom'
import './style.css'
import axios from 'axios'
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

export class ProductCard extends Component {
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
    this.setState({ pId: this.state.pId = "TMX1", pName: this.state.pName = "Timax", pType: this.state.pType = "Male", pPrice: this.state.pPrice = 999 });
    e.preventDefault();

    this.props.addProductRequest(this.state)
    window.alert("product added successfully")
  }

  addProduct2 = (a) => {
    this.setState({ pId: this.state.pId = "TMXe2", pName: this.state.pName = "Timax", pType: this.state.pType = "Male", pPrice: this.state.pPrice = 1099 });
    a.preventDefault();

    this.props.addProductRequest(this.state)
    window.alert("product added successfully")
  }

  addProduct3 = (b) => {
    this.setState({ pId: this.state.pId = "TMX200", pName: this.state.pName = "Timax", pType: this.state.pType = "Male", pPrice: this.state.pPrice = 1299 });
    b.preventDefault();

    this.props.addProductRequest(this.state)
    window.alert("product added successfully")
  }

  addProduct4 = (c) => {
    this.setState({ pId: this.state.pId = "TMXE12", pName: this.state.pName = "Timax", pType: this.state.pType = "Male", pPrice: this.state.pPrice = 1299 });
    c.preventDefault();

    this.props.addProductRequest(this.state)
    window.alert("product added successfully")
  }

  addProduct5 = (d) => {
    this.setState({ pId: this.state.pId = "GS1200", pName: this.state.pName = "G-Shock", pType: this.state.pType = "Male", pPrice: this.state.pPrice = 4299 });
    d.preventDefault();

    this.props.addProductRequest(this.state)
    window.alert("product added successfully")
  }

  addProduct6 = (f) => {
    this.setState({ pId: this.state.pId = "TMX34", pName: this.state.pName = "Timax", pType: this.state.pType = "Male", pPrice: this.state.pPrice = 1299 });
    f.preventDefault();

    this.props.addProductRequest(this.state)
    window.alert("product added successfully")
  }

  addProduct7 = (g) => {
    this.setState({ pId: this.state.pId = "TMX35", pName: this.state.pName = "Timax", pType: this.state.pType = "Male", pPrice: this.state.pPrice = 2299 });
    g.preventDefault();

    this.props.addProductRequest(this.state)
    window.alert("product added successfully")
  }


  addProduct8 = (h) => {
    this.setState({ pId: this.state.pId = "TMXr56", pName: this.state.pName = "Timax", pType: this.state.pType = "Male", pPrice: this.state.pPrice = 2299 });
    h.preventDefault();

    this.props.addProductRequest(this.state)
    window.alert("product added successfully")
  }


  addProduct9 = (i) => {
    this.setState({ pId: this.state.pId = "PXD88", pName: this.state.pName = "plexx", pType: this.state.pType = "Male", pPrice: this.state.pPrice = 1299 });
    i.preventDefault();

    this.props.addProductRequest(this.state)
    window.alert("product added successfully")
  }

  render() {
    return (
      <div>
        <MDBContainer fluid className="my-5 ms-5">
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
                  src={constantData.men5}
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
                    <h5 className="mb-0">Timax</h5>
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
                  src={constantData.men6}
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
                    <h5 className="mb-0">Timax</h5>
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
                  src={constantData.men1}
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
                    <h5 className="mb-0">Timax</h5>
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
                  src={constantData.men2}
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
                    <h5 className="mb-0">Timax</h5>
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
                  src={constantData.men3}
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
                      <s>₹4399</s>
                    </p>
                  </div>

                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">G-Shock</h5>
                    <h5 className="text-dark mb-0">₹4299</h5>
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
                  src={constantData.men4}
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
                    <h5 className="mb-0">Timax</h5>
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
                  src={constantData.men5}
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
                      <s>$2599</s>
                    </p>
                  </div>

                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">Timax</h5>
                    <h5 className="text-dark mb-0">₹2299</h5>
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
                    <button style={{ marginLeft: "5px" }} className='btn btn-info' onClick={this.addProduct7} type='button'><i class="fas fa-cart-plus"></i></button>

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
                  src={constantData.men6}
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
                      <s>₹2399</s>
                    </p>
                  </div>

                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">Timax</h5>
                    <h5 className="text-dark mb-0">₹2299</h5>
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
                    <button style={{ marginLeft: "5px" }} className='btn btn-info' onClick={this.addProduct8} type='button'><i class="fas fa-cart-plus"></i></button>

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
                  src={constantData.product10}
                  position="top"
                  alt="Watch"
                  height={250}
                  width={150}
                />
                <MDBCardBody>
                  <div className="d-flex justify-content-between">
                    <p className="small">
                      <a href="#!" className="text-muted">
                        Laptops
                      </a>
                    </p>
                    <p className="small text-danger">
                      <s>₹1399</s>
                    </p>
                  </div>

                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">Polex</h5>
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
                    <button style={{ marginLeft: "5px" }} className='btn btn-info' onClick={this.addProduct9} type='button'><i class="fas fa-cart-plus"></i></button>

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

const mapDispatchToProps = (dispatch) => ({
  addProductRequest: (data) => dispatch(productAction.addProduct(data)),
  initProductRequest: () => dispatch(productAction.getAllproducts())
  // deleteProductRequest:(id)=>dispatch(productAction.deleteProduct(id))

})

export default connect(null, mapDispatchToProps)(ProductCard)
