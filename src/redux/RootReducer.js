import {combineReducers} from 'redux';
import {boardListReducer} from './BoardList/BoardListReducer';
import {boardReducer} from './Board/BoardReducer';


// console.log("boardList REducer ::", boardListReducer);
const rootReducer = combineReducers({
        boardList : boardListReducer,
        board     : boardReducer
});

export default rootReducer;