import axios from 'axios';
import * as constant from './constant.js';

// GET products
export function getAllproducts() {
    return (dispatch) => {
        axios.get("http://localhost:8888/Products")
            .then(response => dispatch(getProductsuccess(response.data)))
            .catch(error => dispatch(getProductError( error.response.data)))
    }
}

export function getProductsuccess(payload) {
    return { type: constant.GET_PRODUCT_SUCCESS, payload }//action object
}

export function getProductError(payload) {
    return { type: constant.GET_PRODUCT_ERROR, payload }
}

// POST products
export function addProduct(data) {
    return (dispatch) => {
        axios.post("http://localhost:8888/Products",data)
            .then(response => dispatch(addProductsuccess(data)))
            .catch(error => dispatch(addProductError( error.response.data)))
    }
}

export function addProductsuccess(payload) {
    return { type: constant.ADD_PRODUCT_SUCCESS, payload }//action object
}

export function addProductError(payload) {
    return { type: constant.ADD_PRODUCT_ERROR, payload }
}

// UPDATE products
export function updateProduct(data) {
    console.log(data.id)
    return (dispatch) => {
        axios.put(`http://localhost:8888/Products/${data.id}`,data)
            .then(response => dispatch(updateProductsuccess(data)))
            .catch(error => dispatch(updateProductError( error.response.data)))
    }
}

export function updateProductsuccess(payload) {
    return { type: constant.UPDATE_PRODUCT_SUCCESS, payload }//action object
}

export function updateProductError(payload) {
    return { type: constant.UPDATE_PRODUCT_ERROR, payload }
}

// DELETE products
export function deleteProduct(id) {
    
    return (dispatch) => {
        axios.delete(`http://localhost:8888/Products/${id}`)
        .then(response => dispatch(deleteProductsuccess(id)))
        .catch(error => dispatch(deleteProductError( error.response.data)))
    }
}

export function deleteProductsuccess(payload) {
    return { type: constant.DELETE_PRODUCT_SUCCESS, payload }//action object
}

export function deleteProductError(payload) {
    return { type: constant.DELETE_PRODUCT_ERROR, payload }
}

export function getSingleProduct(id) {
    console.log(id)
    return { type: constant.GET_SINGLE_PRODUCT, payload:id }//action object
}