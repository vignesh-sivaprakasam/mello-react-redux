import {GET_BOARD_LIST} from './BoardListTypes.js';
import axios from 'axios';

export const getBoardList = () => {
        return (dispatch) => {
                axios.get('http://localhost:5000/api/boards')
                .then(response => {
                        const boards = response.data;
                        console.log("boards : :", boards);
                })
                .catch(error => {
                        console.log("error : ",error);
                });
        }
}