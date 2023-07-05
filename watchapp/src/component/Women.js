import React, { Component } from 'react'
import constantData from '../shared/Constant'
import { Link } from 'react-router-dom'
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

export class Women extends Component {
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
    this.setState({ pId: this.state.pId = "TMX-BLUE", pName: this.state.pName = "Timax", pType: this.state.pType = "Women", pPrice: this.state.pPrice = 1999 });
    e.preventDefault();
    this.props.addProductRequest(this.state)
    window.alert("product added successfully")
  }

  addProduct2 = (a) => {
    this.setState({ pId: this.state.pId = "FSSL-125", pName: this.state.pName = "Fastrack sliver", pType: this.state.pType = "Women", pPrice: this.state.pPrice = 1099 });
    a.preventDefault();
    this.props.addProductRequest(this.state)
    window.alert("product added successfully")
  }

  addProduct3 = (b) => {
    this.setState({ pId: this.state.pId = "TMXW23", pName: this.state.pName = "Timax", pType: this.state.pType = "Women", pPrice: this.state.pPrice = 1299 });
    b.preventDefault();
    this.props.addProductRequest(this.state)
    window.alert("product added successfully")
  }

  addProduct4 = (c) => {
    this.setState({ pId: this.state.pId = "TMX_pink", pName: this.state.pName = "timax", pType: this.state.pType = "Women", pPrice: this.state.pPrice = 1299 });
    c.preventDefault();
    this.props.addProductRequest(this.state)
    window.alert("product added successfully")
  }

  addProduct5 = (d) => {
    this.setState({ pId: this.state.pId = "ST-Pink", pName: this.state.pName = "Sonata", pType: this.state.pType = "Women", pPrice: this.state.pPrice = 1299 });
    d.preventDefault();
    this.props.addProductRequest(this.state)
    window.alert("product added successfully")
  }

  addProduct6 = (f) => {
    this.setState({ pId: this.state.pId = "TMX-Silver", pName: this.state.pName = "Timax", pType: this.state.pType = "Women", pPrice: this.state.pPrice = 1699 });
    f.preventDefault();
    this.props.addProductRequest(this.state)
    window.alert("product added successfully")
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
                  src={constantData.women1}
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
                    <h5 className="mb-0">Timex sky blue</h5>
                    <h5 className="text-dark mb-0">₹1999</h5>
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
                  src={constantData.women2}
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
                    <h5 className="mb-0">fastrack </h5>
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
                    <p className="text-white mb-0 small">x3</p>
                  </div>
                </div>
                <MDBCardImage
                  src={constantData.women3}
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
                    <button style={{ marginLeft: "5px" }} className='btn btn-info' onClick={this.addProduct1} type='button'><i class="fas fa-cart-plus"></i></button>

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
                  src={constantData.women4}
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
                    <button style={{ marginLeft: "5px" }} className='btn btn-info' onClick={this.addProduct1} type='button'><i class="fas fa-cart-plus"></i></button>

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
                  src={constantData.women5}
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
                    <h5 className="mb-0">Sonata</h5>
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
                    <button style={{ marginLeft: "5px" }} className='btn btn-info' onClick={this.addProduct1} type='button'><i class="fas fa-cart-plus"></i></button>

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
                  src={constantData.women6}
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
                      <s>₹1799</s>
                    </p>
                  </div>

                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">Timax</h5>
                    <h5 className="text-dark mb-0">₹1699</h5>
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
                    <button style={{ marginLeft: "5px" }} className='btn btn-info' onClick={this.addProduct1} type='button'><i class="fas fa-cart-plus"></i></button>
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
export default connect(null, mapDispatchToProps)(Women)
