import React, { useState, useContext } from 'react';
import Menu from '../Menu/Menu';
import MenuItem from '../Menu/MenuItem';

import './Card.css';

import {BoardContext} from '../Board/Board';

function Card(props) {
        const [isMenuOpen, setIsMenuOpen] = useState(false);
        const boardContext = useContext(BoardContext);

        const toggleMenu = () => {
                setIsMenuOpen(!isMenuOpen);
        }
        const onDeleteMenu = () =>{
                console.log(" onDeleteMenu : ", props.stackID,  " cardID  :", props.card._id);
                boardContext.deleteCard(props.stackID, props.card._id);
        }

        console.log(props);
        return (
                <div className="card flex flex_column" draggable="true">
                        <div className="card_header flex">
                                <div className="card_title flex1">{props.card.title}</div>
                                <div className="card_menu flex cursor_pointer" onClick={toggleMenu}>
                                        <img src={require("../TopBar/3dotsHori.png")} height="32" width="32" alt="" />
                                        {isMenuOpen && <Menu>
                                                <MenuItem onClick={onDeleteMenu}>DeleteCard</MenuItem>
                                        </Menu>}
                                </div>
                        </div>
                        <div className="card_content">
                                <div className="card_description"></div>
                        </div>
                </div>
        )
}

export default Card;
