import React from 'react';
import './BoardListItem.css';

function BoardListItem(props) {
        return (
                <div className="board_item cursor_pointer flex">
                        <div className="flex1">{props.name}</div>
                        <div>edit</div>
                        <div>delete</div>
                </div>
        )
}

export default BoardListItem;
