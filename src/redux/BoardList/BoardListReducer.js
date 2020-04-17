import { GET_BOARD_LIST, GET_BOARD_LIST_SUCCESS, SAVE_BOARD_SUCCESS } from './BoardListTypes';

export const boardListReducer = (state = [], action) => {
        switch(action.type) {
                case GET_BOARD_LIST:
                        return state;
                case GET_BOARD_LIST_SUCCESS:
                        return [...state, ...action.payload];
                case SAVE_BOARD_SUCCESS :
                        state = state.map((board) =>{
                                return (board._id === action.payload._id) ? action.payload : board;
                        })
                        return state;
                default:
                        return state;
        }

}