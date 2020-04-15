import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { boardListReducer } from './BoardList/BoardListReducer';
import logger from 'redux-logger';

const store = createStore(boardListReducer, composeWithDevTools(applyMiddleware(logger, thunk)));
export default store;