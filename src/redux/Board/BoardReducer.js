import {
        FETCH_BOARD_DETAILS_SUCCESS,
        EDIT_STACK_SUCCESS
} from './BoardTypes';

const stackReducer = (state, action) => {
        let stacks;
        switch (action.type) {
                case EDIT_STACK_SUCCESS:
                        stacks = state.map((stack) =>{
                                return stack._id === action.payload.stackID ? action.payload.stack : stack;
                        });
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
                case EDIT_STACK_SUCCESS :
                        return {
                                ...state,
                                stacks : stackReducer(state.stacks, action)
                        }        
                default:
                        return state;                        
        }
}
