import {GET_BOARD_LIST , GET_BOARD_LIST_SUCCESS} from './BoardListTypes.js';
import { domain } from '../../domain';
import axios from 'axios';
console.log("================================ domain :");
// const domain = "http://localhost:5000";
const getBoardsSuccess =  (boards) => {
        return {
                type   : GET_BOARD_LIST_SUCCESS,
                boards : boards
        }
}

export const getBoardList = () => {
        return (dispatch) => {
                axios.get(domain+'/api/boards')
                .then(response => {
                        const boards = response.data;
                        console.log("boards : :", boards);
                        dispatch(getBoardsSuccess(boards));
                })
                .catch(error => {
                        console.log("error : ",error);
                });
        }
}