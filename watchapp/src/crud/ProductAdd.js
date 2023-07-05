import React, { Component } from 'react'
import axios from 'axios'

export class ProductAdd extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             pId:"",
             pName:"",
             pType:"",
             Quantity:"",
             pPrice:"",
             pTotal:""
        }
    }
    inputValchange=(e)=>{
        const{name,value}=e.target;
        this.setState({[name]:value})
        
    }

    addProduct=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:8888/Products",this.state).then(()=>{
            window.alert("Product added Successfully")
        })
    }
    render() {
        const{pId,pName,Quantity,pPrice,pTotal}=this.state
        return (
            <div>
                <form onSubmit={this.addProduct}>
                    <label className='form-label'>Enter Product Id(e.g ww1)</label>
                    <input type='text' className='form-control' name='pId' onChange={this.inputValchange} value={pId}/>

                    <label className='form-label'>Select Product name</label><br></br>
                    <input type="radio" name="pName" id="r1" onChange={this.inputValchange} value="Titan"/>Titan
                    <input type="radio" name="pName" id="r1" onChange={this.inputValchange} value="Timax"/>Timax
                    <input type="radio" name="pName" id="r1" onChange={this.inputValchange} value="Fastrack"/>Fastrack
                    <input type="radio" name="pName" id="r1" onChange={this.inputValchange} value="Sonata"/>Sonata
                    <input type="radio" name="pName" id="r1" onChange={this.inputValchange} value="Maxima"/>Maxima
                    <br></br>
                    <br></br>





                    <label className='form-label'>Select Product type </label><br></br>
                    <input type="radio" name="pType" id="r1" onChange={this.inputValchange} value="Male"/>Male 
                    <input type="radio" name="pType" id="r1" onChange={this.inputValchange}  value="Female"/>Female <br></br>
                    
                    <label className='form-label'>Enter Product Quantity</label>
                    <input type='text' className='form-control' name='Quantity' onChange={this.inputValchange} value={Quantity}/>

                    <label className='form-label'>Enter Product Price</label>
                    <input type='text' className='form-control' name='pPrice' onChange={this.inputValchange} value={pPrice}/>

                    <label className='form-label'>Enter Product TOTAL</label>
                    <input type='text' className='form-control' name='pTotal' onChange={this.inputValchange} value={pTotal}/>

                    <button type='submit' className='btn btn-primary'>Add</button>
                </form>
            </div>
        )
    }
}

export default ProductAdd
