import {GET_BOARD_LIST_SUCCESS} from './BoardListTypes.js';
import { domain } from '../../domain';
import axios from 'axios';


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
                        dispatch(getBoardsSuccess(boards));
                })
                .catch(error => {

                });
        }
}