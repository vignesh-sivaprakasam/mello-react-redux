import {
        FETCH_BOARD_DETAILS_SUCCESS
} from './BoardTypes';
export const boardReducer = (state = {}, action) => {
        switch (action.type) {
                case FETCH_BOARD_DETAILS_SUCCESS:
                        state = action.payload;
                        return state;
                default:
                        return state;                        
        }
}