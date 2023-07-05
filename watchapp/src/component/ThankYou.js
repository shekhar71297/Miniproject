import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import order from '../Assets/Images/5631827.jpg'
import { Link } from 'react-router-dom'

export class ThankYou extends Component {
    render() {
        return (
            <div>
                <Card>
                    <Card.Header className='bg-success'>
                        <h3>OrderPlaced</h3>
                    </Card.Header>
                    <Card.Body>
                        <img src={order} height={400}/>
                    </Card.Body>
                </Card>
                <Link to='/details' className='btn btn-success mt-1'>Order Details</Link>
            </div>
        )
    }
}

export default ThankYou
