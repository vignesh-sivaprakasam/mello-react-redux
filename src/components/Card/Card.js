import React, { useState, useContext, useRef } from 'react';
import Menu from '../Menu/Menu';
import MenuItem from '../Menu/MenuItem';

import './Card.css';

import {
        getDrag, setDrag,
        getDrop, setDrop,
        getDirection, setDirection
} from '../DragAndDropUtility';

import {BoardContext} from '../Board/Board';

function Card(props) {
        const [isMenuOpen, setIsMenuOpen] = useState(false);
        const cardRef = useRef(null);
        const boardContext = useContext(BoardContext);

        const toggleMenu = () => {
                setIsMenuOpen(isMenuOpen=> !isMenuOpen);
        }
        const onDeleteMenu = () =>{
                boardContext.deleteCard(props.stackID, props.card._id);
        }

        const onDragStart = (ev) => {
                let cardID   = props.card._id;
                let position = props.order.indexOf(cardID);
                setDrag({stackID: props.stackID, cardID: cardID, cardDom : cardRef.current, position: position, card: props.card, curStackID: props.stackID});
                setDrop({stackID: props.stackID, cardID: cardID, position: position});
        }
        

        const onDragEnter = (ev) => {
                const prevDrop = getDrop();
                ev.stopPropagation();
                
                const drag          = getDrag();
                const dropCardID    = props.card._id;
                const dropStackID   = props.stackID;
                const dragCardDom   = drag.cardDom;
                let newDropPosition = prevDrop.position;
                if(drag.cardID !== dropCardID){

                        const dragOverDom = cardRef.current;
                        if(dragOverDom.nextElementSibling === dragCardDom){
                                if(getDirection() == null || getDirection() === true){
                                        setDirection(true);
                                        newDropPosition = prevDrop.position - 1;
                                } else if(getDirection() === false){
                                        if(drag.stackID === prevDrop.stackID){
                                                // console.log("decrement");
                                                newDropPosition = (prevDrop.position - 1);
                                        } else {
                                                newDropPosition = prevDrop.position;
                                        }
                                }
                        } else if(dragCardDom.nextElementSibling === dragOverDom) {
                                if(getDirection() == null || getDirection() === false) {
                                        setDirection(false);
                                        newDropPosition = prevDrop.position + 1;
                                } else if (getDirection() === true) {
                                        if(drag.stackID === prevDrop.stackID){
                                                newDropPosition = prevDrop.position + 1;
                                        } else {
                                                newDropPosition = prevDrop.position;
                                        }
                                }
                                newDropPosition = prevDrop.position + 1;
                                // cardHolder.insertBefore(dragOverDom, dragCardDom);
                        } else {
                                if(dragCardDom !== dragOverDom){
                                        newDropPosition = props.order.indexOf(props.card._id)
                                }
                        }

                        if(drag.position === newDropPosition && drag.stackID === dropStackID) {
                                setDirection(null);
                        }
                        setDrop({stackID: props.stackID, cardID: dropCardID, position: newDropPosition});
                        boardContext.onCardMove();
                } else {
                        console.log("drag cardID == dropCardID");
                }

                ev.preventDefault();
        }

        const onDragOver = (ev) => ev.preventDefault();

        const onDrop = (ev) => {
                const drag = getDrag();
                const drop = getDrop();
                boardContext.moveCard(drag.stackID, drag.cardID, drop.stackID, drop.position);
        }


        return (
                <div ref={cardRef} className="card flex flex_column" draggable="true" onDragStart={onDragStart}  onDragEnter={onDragEnter} onDragOver={onDragOver} onDrop={onDrop} >
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
        );
}

export default Card;
