import { EDIT_STACK_SUCCESS, DELETE_STACK_SUCCESS } from './StackTypes';
import axios from 'axios';
import { domain, boardUrl, stackUrl } from '../../domain';

const editStackSuccess = (boardID, stackID, stack) => {
        return {
                type    : EDIT_STACK_SUCCESS,
                payload : {
                        boardID: boardID,
                        stackID: stackID,
                        stack  : stack
                }
        }
}

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

const deleteStackSuccess = (boardID, stackID) => {
        return {
                type : DELETE_STACK_SUCCESS,
                payload  : {
                        boardID : boardID,
                        stackID : stackID
                }
        }
}
export const deleteStack = (boardID, stackID) => {
        return dispatch => {
                axios.delete(domain + boardUrl + "/" + boardID + stackUrl + "/" + stackID)
                .then( response => {
                        dispatch(deleteStackSuccess(boardID, stackID));
                });
        }
}