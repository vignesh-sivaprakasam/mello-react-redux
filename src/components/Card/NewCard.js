import React, {useState} from 'react';
import Menu from '../Menu/Menu';
import MenuItem from '../Menu/MenuItem';

//css
import './Card.css';

function Card(props) {

        const [isMenuOpen, setIsMenuOpen] = useState(false);

        return (
                <div className="card flex flex_column">
                        <div className="card_header flex">
                                <div className="card_title flex1">{props.card.title}</div>
                                <div className="card_menu flex cursor_pointer"
                                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                                >
                                        <img src={require("../TopBar/3dotsHori.png")} height="32" width="32" alt="" />
                                        {isMenuOpen &&
                                                <Menu>
                                                        <MenuItem
                                                                onClick={() => {

                                                                }}
                                                        >DeleteCard</MenuItem>
                                                </Menu>
                                        }
                                </div>
                        </div>
                        <div className="card_content">
                                <div className="card_description"></div>
                        </div>
                </div>
        )
}

export default Card
