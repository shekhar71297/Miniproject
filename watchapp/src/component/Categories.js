import React, { Component } from 'react'
import { Card, Container } from 'react-bootstrap'
import './style.css'
import { Link } from 'react-router-dom'
import CarouselImg from "./CarouselImg"



export class Categories extends Component {
    
    render() {
        return (
            <div>
                <CarouselImg/>
            <div className=' container d-flex  mt-5 mb-5'>
            <Card className='Cardbg'>
                <Card.Body className='CardB'>
                    <div>
                    <Link to='/digi'><button className='btn btn-info' type='button'>Explorer</button></Link>
                    </div>
                   
                </Card.Body>
            </Card>

            <Card className='Cardbg1'>
                <Card.Body className='CardB'>
                    <div>
                    <Link to='/prod'><button className='btn btn-info' type='button'>Men's</button></Link>
                    </div>
                   
                </Card.Body>
            </Card>

            <Card className='Cardbg2'>
                <Card.Body className='CardB'>
                    <div>
                    <Link to='/women'><button className='btn btn-info' type='button'>Women's</button></Link>
                    </div>
                   
                </Card.Body>
            </Card>
            
            </div>
             <div>
             </div>
            </div>
        )
    }
}
 
export default Categories
