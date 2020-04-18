import React from 'react';
import './Menu.css';

function MenuItem(props) {
        const onClick = (e) => {
                props.onClick(e);
        }
        return (
                <div className="menu_item" onClick={onClick} >
                        <div>{props.children}</div>
                </div>
        )
}

export default MenuItem;
