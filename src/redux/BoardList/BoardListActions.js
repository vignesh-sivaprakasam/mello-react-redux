import {GET_BOARD_LIST_SUCCESS, SAVE_BOARD_SUCCESS} from './BoardListTypes.js';
import { domain } from '../../domain';
import axios from 'axios';


const getBoardsSuccess =  (boards) => {
        return {
                type    : GET_BOARD_LIST_SUCCESS,
                payload : boards
        }
}

const saveBoardSuccess = (board) => {
        return {
                type    : SAVE_BOARD_SUCCESS,
                payload : board
        }
}
const boardUrl = "/api/boards";
export const getBoardList = () => {
        return (dispatch) => {
                axios.get(domain+boardUrl)
                .then(response => {
                        const boards = response.data;
                        dispatch(getBoardsSuccess(boards));
                })
                .catch(error => {

                });
        }
}

export const saveBoard = (id, name, color) => {
        return (dispatch) => {
                axios.put(domain+boardUrl+"/"+id, {name : name, color : color})
                .then((response)=>{
                        console.log("Update Board response : ", response);
                        dispatch(saveBoardSuccess(response.data));
                });
        }
}