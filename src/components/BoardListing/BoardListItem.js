import React from 'react';
import './BoardListItem.css';

function BoardListItem(props) {
        const onEditClick = ()=>{
                props.onEditCallback(props.id);
        }
        return (
                <div className="board_item cursor_pointer flex">
                        <div className="flex1">{props.name}</div>
                        <div onClick={onEditClick}>edit</div>
                        <div>delete</div>
                </div>
        )
}

export default BoardListItem;
