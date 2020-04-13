import { GET_BOARD_LIST } from './BoardListTypes';

export const boardListReducer = (state = [], action) => {
        switch(action.type) {
                case GET_BOARD_LIST:
                        return [...state];
                default:
                        return state;
        }

}