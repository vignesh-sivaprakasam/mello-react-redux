import React from 'react';
import './Menu.css';

function Menu(props) {
        return (
                <div className="menu_dd flex flex_column pos_abs">
                      {props.children}
                </div>
        )
}

export default Menu;
