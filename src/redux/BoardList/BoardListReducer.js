import { GET_BOARD_LIST, GET_BOARD_LIST_SUCCESS } from './BoardListTypes';

export const boardListReducer = (state = [], action) => {
        switch(action.type) {
                case GET_BOARD_LIST:
                        return state;
                case GET_BOARD_LIST_SUCCESS:
                        return [...state, ...action.boards];
                default:
                        return state;
        }

}