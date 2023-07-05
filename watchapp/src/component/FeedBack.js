import React, { Component } from 'react'
import { Card, Container } from 'react-bootstrap'
import axios from 'axios'
import './style.css'
import { MDBInput, MDBBtn, MDBTextArea } from 'mdb-react-ui-kit';
import constantData from '../shared/Constant';
import { connect } from 'react-redux';
import * as FeedbackAction from '../action/FeedbackAction';

export class FeedBack extends Component {
  constructor(props) {
    super(props)

    this.state = {
      Fname: "",
      Email: "",
      Contact: "",
      FeedbackInfo: "",
      Rating: ""
     
    }
  }
  componentDidUpdate(prevProps) {

    if (prevProps.allFeedback !== this.props.allFeedback) {
        // Fetch data when allProducts prop changes
        this.props.initFeedbackRequest()
    }
  }

  inputValchange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })

  }
  addFeedBack = (e) => {
    e.preventDefault();
    this.props.addFeedbackRequest(this.state)
    window.alert("Thank You..!,For giving feedback")
  }
  componentDidMount() {
    // this.fetchData()
    this.props.initFeedbackRequest()
  }
  // fetchData = () => {
  //   axios.get("http://localhost:8888/FeedBack").then((res) => {
  //     this.setState({ FeedBack: res.data })
  //     console.log(res.data);
  //   })
  // }

  deleteItem = (id, Fname) => {
    if (window.confirm(`Are you sure? you want to remove Feedback:${Fname} `)) {
     this.props.deleteFeedbackRequest(id)
     window.alert("Feedback deleted successfully")
    }


  }





  render() {
    const { Fname, Email, Contact, FeedbackInfo } = this.state
    return (
      <div className='feedback'>
        <img className='imgset' src={constantData.feed} alt='img' />
        <Container className='pt-3'>
          <form id='form' className=' conForm1' style={{ width: '100%', maxWidth: '300px' }} onSubmit={this.addFeedBack}>
            <h2>Contact us</h2>
            <MDBInput className='text-black' name='Fname' label='Name' v-model='name' wrapperClass='mb-4' value={Fname} pattern='^[a-zA-Z]{2,15}$' required onChange={this.inputValchange} />

            <MDBInput className='text-black' name='Email' type='email' label='Email' v-model='Email' wrapperClass='mb-4' pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' required value={Email} onChange={this.inputValchange} />

            <MDBInput className='text-black' name='Contact' type='tel' label='Mobile No' v-model='Mobile No' wrapperClass='mb-4' value={Contact} pattern='^[0-9]{10}$' required onChange={this.inputValchange} />

            <MDBTextArea className='text-black' name='FeedbackInfo' wrapperClass='mb-4' label='Feedback' value={FeedbackInfo} onChange={this.inputValchange} />


            <div className="mx-0 mx-sm-auto">
              <div className="text-center">
                <p>
                  <strong>How do you rate customer support</strong>
                </p>
              </div>

              <div className="text-center mb-3">
                <div className="d-inline mx-3">
                  Bad
                </div>

                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="Rating" id="inlineRadio1"
                    value="1" onChange={this.inputValchange} />
                  <label className="form-check-label" for="inlineRadio1">1</label>
                </div>

                <div className="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="Rating" id="inlineRadio2"
                    value="2" onChange={this.inputValchange} />
                  <label className="form-check-label" for="inlineRadio2">2</label>
                </div>

                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="Rating" id="inlineRadio3"
                    value="3" onChange={this.inputValchange} />
                  <label className="form-check-label" for="inlineRadio3">3</label>
                </div>

                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="Rating" id="inlineRadio4"
                    value="4" onChange={this.inputValchange} />
                  <label className="form-check-label" for="inlineRadio4">4</label>
                </div>

                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="Rating" id="inlineRadio5"
                    value="5" onChange={this.inputValchange} />
                  <label className="form-check-label" for="inlineRadio5">5</label>
                </div>
                <div className="d-inline me-4">
                  Excellent
                </div>
              </div>
            </div>
            <MDBBtn type='submit' color='primary' block className='my-4'> Send </MDBBtn>



          </form>



        </Container>
        {
          this.props.allFeedback.map((val, index) => {
            return <Card key={index} style={{ margin: "auto", marginTop: "10px", marginLeft: "2px", display: "inline-flex", backgroundColor: "skyblue" }}>
              <Card.Body>
                <i className="fas fa-comments"></i>
                <h4 style={{ fontFamily: "sans-serif" }}>{val.Fname}</h4>
                <hr></hr>
                <p>{val.FeedbackInfo}</p>

                <i className="fas fa-star"></i>
                <h5>{val.Rating}</h5>
                <button type='button' className='btn btn-outline-danger btn-sm' onClick={() => this.deleteItem(val.id)}><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                {/* <button type='button'className='btn btn-outline-success btn-sm' onClick={()=>this.getRecord(val.id)} ><a href='#editsection'><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a></button>| */}


              </Card.Body>

            </Card>

          })
        }

      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  allFeedback: state.feedbackStore.allFeedback,

})
const mapDispatchToProps = (dispatch) => ({
  initFeedbackRequest: () => dispatch(FeedbackAction.getAllFeedback()),
  addFeedbackRequest: (data) => dispatch(FeedbackAction.addFeedBack(data)),
  deleteFeedbackRequest: (id) => dispatch(FeedbackAction.deleteFeedback(id))
})

export default connect(mapStateToProps,mapDispatchToProps) ( FeedBack)
