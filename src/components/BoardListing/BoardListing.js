import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import BoardListItem from './BoardListItem.js';
import { getBoardList } from '../../redux/BoardList/BoardListActions';

import '../../common.css';
import './BoardListing.css';

const styles = {
        width : '400px',
        height : '450px'
}
function BoardListing(props) {
        // const [boardList, setBoardList] = useState([]);
        useEffect(()=>{
                props.fetchBoardList();
        },[]);
        return (
                <div style={styles} className="center_abs">
                        <div className="board_list_container flex flex_column">
                                <div className="text_center"> My Boards</div>
                                <div className="board_list">
                                {
                                        props.boards.length !== 0 ? props.boards.map(board => <BoardListItem key={board._id} name={board.name} />) : null
                                }
                                </div>
                                <div className="text_center create_board cursor_pointer"> + Create Board</div>
                        </div>
                </div>    
        );
}

const mapStateToProps = (state) => {
        console.log("map state to props : : ", state);
        return {
                boards : state
        };
}

const mapDispatchToProps = (dispatch) => {
        console.log(" map dispatch to props : ");
        return {
                fetchBoardList : () => dispatch(getBoardList())
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardListing);
