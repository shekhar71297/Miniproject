import {createSelector} from 'reselect';
import { initialState as initialProductState }  from '../reducers/ProductReducer';



const selectProducts = state => {
    return state ? state: initialProductState;
  };
  
  export const getAllProducts = createSelector(
    selectProducts,
    state=> {
        const {allProducts} = state;
      return allProducts;
    }
  );
