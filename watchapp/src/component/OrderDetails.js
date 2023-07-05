import React, { Component } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Table } from 'react-bootstrap'
export class OrderDetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            products:[]
        }
    }
    componentDidMount(){
        this.fetchData()
    }
    fetchData=()=>{
        axios.get("http://localhost:8888/Products").then((res)=>{
            this.setState({products:res.data})
            console.log(res.data);
        })
    }
    render() {
        const{products}=this.state
        const d = new Date();
        let total=0
        for(let i of products){
            total+=i.pPrice
        }
        

        return (
            
            <div>
                 
                    
                     <section className="h-100 h-custom" style={{backgroundColor: "#eee"}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-8 col-xl-6">
        <div className="card border-top border-bottom border-3" style={{borderColor:" #f37a27"}}>
          <div className="card-body p-5">

            <p className="lead fw-bold mb-5" style={{color: "2#f377"}}>Purchase Reciept</p>
            <div className="row">
              <div className="col mb-3">
                <p className="small text-muted mb-1">Date</p>
                <p>{d.getDate()}/{d.getMonth()}/{d.getFullYear()}</p>
              </div>
              <div className="col mb-3">
                <p className="small text-muted mb-1">Order No.</p>
                <p>012j1gvs356c</p>
              </div>
            </div>
            
            
            <div className="mx-n5 px-5 py-4" style={{backgroundColor: "2ff2f2",textAlign:"center",border:"none"}}>
                {
                    products.map((PRO,index)=>{
                     return <Table style={{textAlign:"left"}} striped bordered hover variant="light">
                      <thead>
                          {/* <th>ITEMS</th>
                          <th style={{textAlign:"right"}}>PRICE</th> */}
                      </thead>
                      <tbody>
                          <tr key={index}> 
                              <td style={{textAlign:"left"}}>{PRO.pName}</td>
                              <td style={{textAlign:"right"}}>{PRO.pPrice}</td>
                          </tr>
                      </tbody>
                  
                    </Table>
                    })
                }
            </div>

            <div className="row my-4">
              <div className="col-md-4 offset-md-8 col-lg-3 offset-lg-9">
                <p className="lead fw-bold mb-0" style={{color: "#f37a27",fontSize:"15px"}}>TOTAL:{total}</p>
              </div>
            </div>

            <p className="lead fw-bold mb-4 pb-2" style={{color: "#f37a27"}}>Tracking Order</p>

            <div className="row">
              <div className="col-lg-12">

                <div NameclassName="horizontal-timeline">

                  <ul className="list-inline items d-flex justify-content-between">
                    <li className="list-inline-item items-list">
                      
                      <p className="py-1 px-2 rounded text-white" style={{backgroundColor: "#f37a27"}}>Ordered</p>
                        
                    </li>
                    <p className="py-1 px-2 rounded text-white mt-3" style={{backgroundColor: "#f37a27",width:"50px",height:"2px"}}></p>
                    <li className="list-inline-item items-list">
                      <p className="py-1 px-2 rounded text-white" style={{backgroundColor: "#f37a27"}}>Shipped</p>
                    </li>
                    <p className="py-1 px-2 rounded text-white mt-3" style={{backgroundColor: "#f37a27",width:"50px",height:"2px"}}></p>
                    <li className="list-inline-item items-list">
                      <p className="py-1 px-2 rounded text-white" style={{backgroundColor: "#f37a27"}}>Arriving
                      </p>
                    </li>
                    <p className="py-1 px-2 rounded text-white mt-3" style={{backgroundColor: "#f37a27",width:"50px",height:"2px"}}></p>
                    <li className="list-inline-item items-list text-end" style={{marginLeft: "8px"}}>
                      <p style={{marginRight: "-8px"}}>Delivered</p>
                    </li>
                  </ul>

                </div>

              </div>
            </div>

          <Link to='/CntForm'> <p className="mt-4 pt-2 mb-0">Want any help? <a href="#Contact" style={{color: "#f37a27"}}>Please contact
                us</a></p></Link> 

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    
            </div>
           
        )
    }
}

export default OrderDetails
