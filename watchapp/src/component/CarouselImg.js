import React, { Component } from 'react'
import img1 from '../Assets/Images/FM_offer.webp'
import img4 from '../Assets/Images/offer.webp'
import img5 from '../Assets/Images/GT-desktop.jpg'
import { Carousel } from "react-bootstrap";



export class RefImage extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
         
        }
    }


    
    render() {
        return (
            <div>
               <Carousel>
      <Carousel.Item interval={1000}>
      <img
          className="d-block w-100"
          src={img4}
          alt="First slide"
          height="300px"
        />
      
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
          height="300px"
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={img5}
          alt="First slide"
          height="300px"
        />
        
      </Carousel.Item>
    </Carousel>

  
            </div>
        )
    }
}

export default RefImage
