import * as constant from '../action/constant'

export const initialState = {
    allFeedback: [],
    feedback: {},
    error: null
}

export default function feedbackReducer(state = initialState, action) {
    switch (action.type) {
        case constant.GET_FEEDBACK_SUCCESS:{
            return { ...state, feedback: {}, allFeedback: action.payload }
        }
           
        case constant.GET_FEEDBACK_ERROR,
            constant.ADD_FEEDBACK_ERROR,
            constant.DELETE_FEEDBACK_ERROR:{
            return { ...state, feedback: {}, error: action.payload };
            }

        case constant.DELETE_FEEDBACK_SUCCESS :{
            let allFeedback = state.allFeedback.filter((d)=>d.id !== action.payload)
            return {...state,allFeedback:allFeedback};
        }
        
        case constant.ADD_FEEDBACK_SUCCESS:{
            let allFeedback = state.allFeedback;
            allFeedback.push(action.payload);
            return {...state,feedback:{},allFeedback:allFeedback}; 
        }

        default:
            return state
            
    }
}