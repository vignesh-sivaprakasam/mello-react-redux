import React from 'react';
import './BoardListItem.css';

function BoardListItem(props) {
        const onEditClick = (ev)=>{
                props.onEdit(props.id);
                ev.stopPropagation();
        }
        const onDeleteClick = (ev)=>{
                props.onDelete(props.id);
                ev.stopPropagation();
        }
        const onClick = ()=>{
                props.onClick(props.id);
        }
        return (
                <div className="board_item cursor_pointer flex" onClick={onClick}>
                        <div className="flex1">{props.name}</div>
                        <div onClick={onEditClick}>edit</div>
                        <div onClick={onDeleteClick}>delete</div>
                </div>
        )
}

export default BoardListItem;
