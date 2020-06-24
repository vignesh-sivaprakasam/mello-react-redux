import { FETCH_BOARD_DETAILS_SUCCESS } from './BoardTypes';
import { CREATE_STACK_SUCCESS, EDIT_STACK_SUCCESS, DELETE_STACK_SUCCESS } from '../Stack/StackTypes';
import {CREATE_CARD_SUCCESS, DELETE_CARD_SUCCESS} from '../Card/CardTypes';

const cardReducer = (state, action) => {
        let cards;
        switch (action.type) {
                case FETCH_BOARD_DETAILS_SUCCESS:
                        cards = Object.create(null);
                        state.forEach(card => {
                                cards[card._id] = card;
                        });
                        return cards;
                case CREATE_STACK_SUCCESS:
                        cards = Object.create(null);
                        state.forEach(card => {
                                cards[card._id] = card;
                        });
                        return cards;
                case EDIT_STACK_SUCCESS : 
                        cards = Object.create(null);
                        state.forEach(card => {
                                cards[card._id] = card;
                        })
                        return cards;
                case CREATE_CARD_SUCCESS:
                        cards = {...state}
                        cards[action.payload.cardID] = action.payload.card;
                        return cards;
                case DELETE_CARD_SUCCESS:
                        cards = {...state}
                        delete cards[action.payload.cardID];
                        return cards;
                default:
                        return state;
        }
}

const stackReducer = (state, action) => {
        let stacks;
        switch (action.type) {
                case FETCH_BOARD_DETAILS_SUCCESS:
                        stacks = state.map(stack => {
                                stack.cards = cardReducer(stack.cards, action);
                                return stack;
                        });
                        return stacks;
                case CREATE_STACK_SUCCESS : 
                        action.payload.stack.cards = cardReducer(action.payload.stack.cards, action);
                        return [...state, action.payload.stack];
                case EDIT_STACK_SUCCESS:
                        stacks = state.map((stack) =>{
                                if(stack._id === action.payload.stackID) {
                                        stack = action.payload.stack;
                                        stack.cards = cardReducer(stack.cards, action);
                                }
                                return stack;
                        });
                        return stacks;
                case DELETE_STACK_SUCCESS:
                        stacks = state.filter((stack) => stack._id !== action.payload.stackID);
                        return stacks;
                
                case CREATE_CARD_SUCCESS :
                        stacks = state.map(stack => {
                                if(stack._id === action.payload.stackID){
                                        stack.card_order = [...stack.card_order, action.payload.cardID]
                                        stack.cards = cardReducer(stack.cards, action);
                                }
                                return stack;
                        });
                        return stacks;
                case DELETE_CARD_SUCCESS: 
                        stacks = state.map((stack) => {
                                if(stack._id === action.payload.stackID){
                                        stack.card_order = stack.card_order.filter(cardID => cardID !== action.payload.cardID);
                                        stack.cards = cardReducer(stack.cards, action);
                                }
                                return stack;
                        });
                        return stacks;
                default:
                        return state;
        }
}

export const boardReducer = (state = {}, action) => {
        switch (action.type) {
                case FETCH_BOARD_DETAILS_SUCCESS:
                        state = action.payload;
                        state.stacks = stackReducer(state.stacks, action);
                        return state;
                case CREATE_STACK_SUCCESS : 
                        return {
                                ...state,
                                stacks : stackReducer(state.stacks, action)
                        }
                case EDIT_STACK_SUCCESS :
                        return {
                                ...state,
                                stacks : stackReducer(state.stacks, action)
                        }
                case DELETE_STACK_SUCCESS :
                        return {
                                ...state,
                                stacks : stackReducer(state.stacks, action)
                        }
                case CREATE_CARD_SUCCESS : 
                        return {
                                ...state,
                                stacks : stackReducer(state.stacks, action)
                        }
                case DELETE_CARD_SUCCESS : 
                        return {
                                ...state,
                                stacks : stackReducer(state.stacks, action)
                        }
                default:
                        return state;
        }
}
