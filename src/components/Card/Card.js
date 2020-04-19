import React, { useState, useContext, useRef } from 'react';
import Menu from '../Menu/Menu';
import MenuItem from '../Menu/MenuItem';

import './Card.css';

import {getDrag, setDrag, getDrop, setDrop} from '../DragAndDropUtility';

import {BoardContext} from '../Board/Board';

function Card(props) {
        const [isMenuOpen, setIsMenuOpen] = useState(false);
        const cardRef = useRef(null);
        const boardContext = useContext(BoardContext);

        const toggleMenu = () => {
                setIsMenuOpen(!isMenuOpen);
        }
        const onDeleteMenu = () =>{
                console.log(" onDeleteMenu : ", props.stackID,  " cardID  :", props.card._id);
                boardContext.deleteCard(props.stackID, props.card._id);
        }



        const onDragStart = (ev) => {
                console.log("onDragStart :: stack :", props.stackID, " :::  card :", props.card._id);
                setDrag({stackID: props.stackID, cardID: props.card._id, dragCardDom : cardRef.current});
                setDrop({stackID: props.stackID, cardID: props.card._id});
                // ev.dataTransfer.setData("drag", {cardID : props.card._id});

        }

        const onDragEnter = (ev) => {
                const prevDrop = getDrop();
                if(prevDrop.stackID === props.stackID && prevDrop.cardID === props.card._id){
                        return;
                } else {
                        const drag      = getDrag();
                        let dropCardID  = props.card._id;
                        const dragCardDom = drag.dragCardDom;
                        if(drag.cardID !== dropCardID){
                                const cardHolder = cardRef.current.parentElement;
                                const dragOverDom = cardRef.current;
                                if(dragOverDom.nextElementSibling === dragCardDom){
                                        console.log("up :: ")
                                        cardHolder.insertBefore(dragCardDom, dragOverDom);
                                } else if(dragCardDom.nextElementSibling === dragOverDom) {
                                        console.log("down :");
                                        cardHolder.insertBefore(dragOverDom, dragCardDom);
                                } else {
                                        
                                }
                        } else {
                                console.log("drop is same as drag");
                        }
                        setDrop({stackID: props.stackID, cardID: dropCardID});
                }
                ev.preventDefault();
        }

        const onDragOver = (ev) => {
                ev.preventDefault();
        }

        const onDrop = (ev) => {
                console.log("ev.da",ev.dataTransfer.getData('drag'));
                console.log("drop");
                const drag = getDrag();
                const drop = getDrop();
        }

        console.log(props);
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
