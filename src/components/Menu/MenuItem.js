import React from 'react';
import './Menu.css';

function MenuItem(props) {
        const onClick = (e) => {
                props.onClick();
        }
        return (
                <div className="menu_item">
                        <div onClick={onClick}>{props.title}</div>
                </div>
        )
}

export default MenuItem;
