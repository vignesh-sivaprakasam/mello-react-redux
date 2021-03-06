import React, { useState, useContext } from 'react';
import Menu from '../Menu/Menu';
import MenuItem from '../Menu/MenuItem';

import { BoardContext } from '../Board/NewBoard';

//React Beautiful Drag and Drop 
import { Draggable } from 'react-beautiful-dnd';

//css
import './Card.css';

function Card(props) {

        const [isMenuOpen, setIsMenuOpen] = useState(false);
        const boardContext = useContext(BoardContext);

        return (
                <Draggable key={props.card._id} draggableId={props.card._id} index={props.index}>
                        {
                                (provided, snapshot) => {
                                        return (
                                                <div
                                                        className="card flex flex_column"
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        ref={provided.innerRef}
                                                        style={{
                                                                userSelect: 'none',
                                                                minHeight: 50,
                                                                border : snapshot.isDragging ? "2px solid #00aaff": "",
                                                                // backgroundColor: snapshot.isDragging ? "#263B4A" : "",
                                                                // color : snapshot.isDragging ? "white" : "",
                                                                ...provided.draggableProps.style
                                                        }}
                                                >
                                                        <div className="card_header flex">
                                                                <div className="card_title flex1">{props.card.title}</div>
                                                                <div className="card_menu flex cursor_pointer"
                                                                        onClick={() => setIsMenuOpen(isMenuOpen=> !isMenuOpen)}
                                                                >
                                                                        <img src={require("../TopBar/3dotsHori.png")} height="32" width="32" alt="" />
                                                                        {isMenuOpen &&
                                                                                <div>
                                                                                <Menu>
                                                                                        <MenuItem
                                                                                                onClick={() => {
                                                                                                        boardContext.deleteCard(props.stackID, props.card._id);
                                                                                                }}
                                                                                        >DeleteCard</MenuItem>
                                                                                </Menu>
                                                                                </div>
                                                                        }
                                                                </div>
                                                        </div>
                                                        <div className="card_content">
                                                                <div className="card_description"></div>
                                                        </div>
                                                </div>

                                        );
                                }
                        }
                </Draggable>
        )
}

export default Card
