import React from 'react';
import BoardListItem from './BoardListItem';

const styles = {
        width : '400px',
        height : '450px'
}

const myBoard = {
        justifyContent : 'center'
}
function BoardListing(props) {
        const editClick = (id) => {
                props.onEdit(id);
        }
        const onCreateClick = () => {
                props.onCreate();
        }
        return (
                <div style={styles} className="center_abs">
                        <div className="board_list_container flex flex_column">
                                <div className="text_center"> My Boards</div>
                                <div className="board_list">
                                {
                                        props.boards.length !== 0 ? props.boards.map(board => <BoardListItem key={board._id} id={board._id} onEditCallback={editClick} name={board.name} />) : null
                                }
                                </div>
                                <div style={myBoard} className="flex">
                                        <div className="text_center create_board cursor_pointer" onClick={onCreateClick}>+ Create Board</div>
                                </div>
                        </div>
                </div>
        )
}

export default BoardListing
