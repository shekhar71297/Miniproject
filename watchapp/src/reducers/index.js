import { combineReducers } from 'redux';
import productReducer from './ProductReducer';
import feedbackReducer from './FeedbackReducer';

const rootReducer = combineReducers({
    productStore: productReducer,
    feedbackStore:feedbackReducer
});

export default rootReducer;