import {
        FETCH_BOARD_DETAILS_SUCCESS
} from './BoardTypes';

import axios from 'axios';
import { domain } from '../../domain';

const boardUrl = "/api/boards";
export const fetchBoardDetails = (id) => {
        return (dispatch) => {
                axios.get(domain+boardUrl+ "/" + id)
                .then((response) => {
                        console.log(response);
                })
                .catch(() => {

                });
        }
}