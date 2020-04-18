import { FETCH_BOARD_DETAILS_SUCCESS } from './BoardTypes';
import { CREATE_STACK_SUCCESS, EDIT_STACK_SUCCESS, DELETE_STACK_SUCCESS } from '../Stack/StackTypes';


const stackReducer = (state, action) => {
        let stacks;
        switch (action.type) {
                case CREATE_STACK_SUCCESS : 
                        return [...state, action.payload.stack];
                case EDIT_STACK_SUCCESS:
                        stacks = state.map((stack) =>{
                                return stack._id === action.payload.stackID ? action.payload.stack : stack;
                        });
                        return stacks;
                case DELETE_STACK_SUCCESS:
                        stacks = state.filter((stack) => stack._id !== action.payload.stackID);
                        return stacks;
                default:
                        return state;
        }
}

export const boardReducer = (state = {}, action) => {
        switch (action.type) {
                case FETCH_BOARD_DETAILS_SUCCESS:
                        state = action.payload;
                        return state;
                case CREATE_STACK_SUCCESS : 
                        return {
                                ...state,
                                stacks : stackReducer(state.stacks, action)
                        }
                case EDIT_STACK_SUCCESS :
                        return {
                                ...state,
                                stacks : stackReducer(state.stacks, action)
                        }
                case DELETE_STACK_SUCCESS :
                        return {
                                ...state,
                                stacks : stackReducer(state.stacks, action)
                        }
                default:
                        return state;
        }
}
