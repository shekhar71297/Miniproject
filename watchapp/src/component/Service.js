import React, { Component } from 'react'
import constantData from '../shared/Constant'

export class Service extends Component {
    render() {
        return (
            <div>
                <h1 className='heading'>OUR SERVICE</h1>
                  <img src={constantData.about5} style={{width:"100%"}}/>
                  <div class="container">
                    <div class="row mt-3">
                        <div class="col-sm m-auto " style={{textAlign:"justify",color:'white'}}>
                        <i class="far fa-check-circle text-success fs-1 text-center"></i>
                        <h4>100% ORIGINALAll products are original and go through strict quality check.</h4>
                        </div>
                        <div class="col-sm" style={{textAlign:"justify",color:'white',fontSize:"20px"}}>
                        <i class="fas fa-exchange-alt text-warning fs-1 text-center"></i>
                        <h4> 7 DAY RETURN
                         Use our hassle free method to return.</h4>
                         </div>
                        <div class="col-sm" style={{textAlign:"justify",color:'white',fontSize:"20px"}}>
                        <i  class="fas fa-truck text-primary fs-1"></i>
                        <h4>Shipping in India is free. Shipping charges applicable for International locations.</h4>
                        
                         </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Service
