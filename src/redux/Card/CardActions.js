import { CREATE_CARD_SUCCESS , DELETE_CARD_SUCCESS, MOVE_CARD_SUCCESS } from './CardTypes';
import axios from 'axios';
import { domain, boardUrl, stackUrl, cardUrl } from '../../domain';

const createCardSuccess = (boardID, stackID, cardID, card) => {
        return {
                type: CREATE_CARD_SUCCESS,
                payload: {
                        boardID : boardID,
                        stackID : stackID,
                        cardID  : cardID,
                        card    : card
                }
        }
}

export const createCard = (boardID, stackID, title, description) => {
        return dispatch => {
                axios.post(domain+boardUrl+ "/" + boardID + stackUrl + "/" + stackID + cardUrl, {
                        title       : title,
                        description : description
                })
                .then(response => {
                        console.log("card created : ", response.data);
                        dispatch(createCardSuccess(boardID, stackID, response.data._id, response.data));
                })
                .catch(error => {

                });
        }
}

const deleteCardSuccess = (boardID, stackID, cardID) => {
        return {
                type : DELETE_CARD_SUCCESS,
                payload : {
                        boardID,
                        stackID,
                        cardID
                }
        }
}

export const deleteCard = (boardID, stackID, cardID) => {
        return dispatch => {
                axios.delete(domain+boardUrl+ "/" + boardID + stackUrl + "/" + stackID + cardUrl + "/"+cardID)
                .then(res => {
                        dispatch(deleteCardSuccess(boardID, stackID, cardID));
                })
                .catch(err => {

                });
        }
}

const moveCardSuccess = (boardID, stackID, cardID, data) => {
        return {
                type    : MOVE_CARD_SUCCESS,
                payload : data
        }
}

export const moveCard = (boardID, stackID, cardID, toStackID, position) => {
        const query = "?stackID="+toStackID+"&pos="+position;
        console.log(domain + boardUrl + "/" + boardID + stackUrl + "/" + stackID + cardUrl + "/" + cardID);
        console.log(query,"position : ", position);
        return dispatch => {

                axios.put(domain + boardUrl + "/" + boardID + stackUrl + "/" + stackID + cardUrl + "/" + cardID+"/move"+query)
                .then(res => {
                        console.log("move success", res.data);
                })
                .catch(err => {

                });
        }
}