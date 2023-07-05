import React, { Component } from 'react'
// import { Card } from 'react-bootstrap'
import constantData from '../shared/Constant'

export class AboutUs extends Component {
    render() {
        return (
            <div>
                <img src={constantData.about3} className='imgAbout'/>
                <img src={constantData.about4} className='imgAbout' />
                <img src={constantData.about6} style={{width:"100%"}} />
                </div>
        )
    }
}

export default AboutUs
