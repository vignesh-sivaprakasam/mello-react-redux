import {
        FETCH_BOARD_DETAILS_SUCCESS
} from './BoardTypes';

import axios from 'axios';
import { domain, boardUrl } from '../../domain';

const fetchBoardDetailsSuccess = (board) => {
        return {
                type    : FETCH_BOARD_DETAILS_SUCCESS,
                payload : board
        }
}


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


