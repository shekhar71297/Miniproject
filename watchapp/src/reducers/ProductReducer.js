import * as constant from '../action/constant.js';

export const  initialState={
    allProducts:[],
    product:{},
    error:null
}

export default function productReducer(state = initialState , action){

    switch (action.type) {
        case constant.GET_PRODUCT_SUCCESS:{
            // const draft = state;
            // draft.allProducts = action.payload;
            // draft.product = {};
            // return draft;
            return {...state,product:{},allProducts:action.payload};           
        }
    
        case constant.GET_PRODUCT_ERROR,
         constant.ADD_PRODUCT_ERROR,
         constant.UPDATE_PRODUCT_ERROR,
         constant.DELETE_PRODUCT_ERROR:{
            // const draft = state;
            // draft.error = action.payload;
            // draft.product = {};
            // return draft;
            return {...state,product:{},error:action.payload};
         }

        case constant.ADD_PRODUCT_SUCCESS:{
            // const draft = state;
            // draft.allProducts = [...draft.allProducts,action.payload];
            // draft.product = {};
            // return draft;
            let allProducts = state.allProducts;
            allProducts.push(action.payload);
            return {...state,product:{},allProducts:allProducts}; 
        }

        case constant.UPDATE_PRODUCT_SUCCESS:{
            // const draft = state;
            // const index = draft.allProducts.findIndex((d)=>d.id===action.payload.id) || -1
            // draft.allProducts[index]=action.payload
            // return draft;
            const index = state.allProducts.findIndex((d)=>d.id===action.payload.id);
            const product = action.payload;
            let allProducts = state.allProducts;
            allProducts.splice(index,1,product);
            return {...state,product:{},allProducts:allProducts}; 
        }

        case constant.DELETE_PRODUCT_SUCCESS:{
            // const draft = state;
            let allProducts = state.allProducts.filter((d)=>d.id !== action.payload)
            return {...state,allProducts:allProducts};
            
        }

        case constant.GET_SINGLE_PRODUCT:{
            // console.log("inside reducer single product")
            // const draft = state;
            // const index = draft.allProducts.findIndex((d)=>d.id===action.payload)
            // draft.product=draft.allProducts[index]
            // return draft;
            const index = state.allProducts.findIndex(d => d.id === action.payload);
            const product = state.allProducts[index];
            return {...state,product:product};
        }

        default:
            return state;
    }
}