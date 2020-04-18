import {
        FETCH_BOARD_DETAILS_SUCCESS,
        EDIT_STACK_SUCCESS
} from './BoardTypes';

import axios from 'axios';
import { domain } from '../../domain';

const fetchBoardDetailsSuccess = (board) => {
        return {
                type    : FETCH_BOARD_DETAILS_SUCCESS,
                payload : board
        }
}

const boardUrl = "/api/boards";
export const fetchBoardDetails = (id) => {
        return (dispatch) => {
                axios.get(domain+boardUrl+ "/" + id)
                .then((response) => {
                        console.log(response);
                        dispatch(fetchBoardDetailsSuccess(response.data));
                })
                .catch(() => {

                });
        }
}


const editStackSuccess = (boardID, stackID, stack) => {
        return {
                type    : EDIT_STACK_SUCCESS,
                payload : {
                        boardID: boardID,
                        stackID: stackID,
                        stack : stack
                }
        }
}
const stackUrl = "/stacks"
export const editStack = (boardID, stackID, name, color) => {
        return (dispatch) => {
                axios.put(domain +boardUrl+ "/" + boardID + stackUrl+ "/" + stackID, {
                        name  : name,
                        color : color
                })
                .then((response) => {
                        dispatch(editStackSuccess(boardID, stackID, response.data));
                })
                .catch((error) => {

                });
        }
}