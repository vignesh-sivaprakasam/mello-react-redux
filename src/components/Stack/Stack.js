import React, { useState, useRef, useContext } from 'react';

import './Stack.css';
import EditStack from './EditStack';
import Menu from '../Menu/Menu';
import MenuItem from '../Menu/MenuItem';
import Card from '../Card/Card';
import CreateCard from '../Card/CreateCard';
import {BoardContext} from '../Board/Board';
import {getDrag, getDrop, setDrop} from '../DragAndDropUtility';


function Stack(props) {
        const [isMenuOpen, setIsMenuOpen] = useState(false);
        const [isEditStackOpen, setIsEditStackOpen] = useState(false);
        const toggleMenu = () => {
                setIsMenuOpen(!isMenuOpen);
        }
        const onEditMenu = (ev) => {
                setIsEditStackOpen(true);
                setIsMenuOpen(false);
                ev.stopPropagation();
        }


        const boardContext = useContext(BoardContext);
        const onDeleteMenu = () => {
                setIsMenuOpen(false);
                boardContext.deleteStack(props.stack._id);
        }

        const onSave = (name, color) => {
                console.log(props.stack._id," onSave ", name, color);
                setIsEditStackOpen(false);
                boardContext.editStack(props.stack._id, name, color);
        }
        const onCancel = () => {
                setIsEditStackOpen(false);
        }

        const [isCreateCardOpen, setIsCreateCardOpen] = useState(false);
        const onCardAdd = () => {
                setIsCreateCardOpen(true);
        }
        
        const onCardCreate = (title, description) => {
                setIsCreateCardOpen(false);
                boardContext.createCard(props.stack._id, title, description);
        }

        const onCardCancel = () => {
                setIsCreateCardOpen(false);
        }

        const cardHolderRef = useRef(null);
        const onDragEnter = () => {
                console.log("stack drag enter", props.stack.name);
                const  drag = getDrag();
                setDrop({stackID: props.stack._id, cardID: null, position : cardHolderRef.current.children.length})
                cardHolderRef.current.appendChild(drag.cardDom);
        }
        const onDragOver = (ev) => ev.preventDefault();
        const onDrop = () => {
                console.log("stack drop: :");
                // const drag = getDrag();
                // const drop = getDrop();
                // if(drag.stackID == drop.stackID){
                //         console.log("same stack drop");
                // }
                // boardContext.moveCard(drag.stackID, drag.cardID, drop.stackID, drop.position);
        }

        
        return (
                <div className="stack flex flex_column">
                        <div style={{backgroundColor: props.stack.color}} className="stack_header flex">
                                <div id="stackName" className="stack_name">{props.stack.name}</div>
                                <div className="stack_menu cursor_pointer" onClick={toggleMenu}>
                                        <img src={require("../TopBar/3dotsHori.png")} height="32" width="32" alt="" />
                                        {isMenuOpen && <Menu>
                                                <MenuItem onClick={onEditMenu}>EditStack</MenuItem>
                                                <MenuItem onClick={onDeleteMenu}>DeleteStack</MenuItem>
                                        </Menu>}
                                </div>
                        </div>
                        <div  className="flex1 flex flex_column" >
                                <div ref={cardHolderRef} className="card_holder">
                                        {props.stack.card_order.map((cardID) => <Card key={cardID} stackID={props.stack._id} card={props.stack.cards[cardID]} order={props.stack.card_order}/>)}
                                </div>
                                <div className="flex1" onDrop={onDrop} onDragOver={onDragOver} onDragEnter={onDragEnter}></div>
                        </div>
                        <div className="stack_footer">
                                <div className="createCard circle center_margin cursor_pointer" onClick={onCardAdd}>
                                        <div className="center_abs">+</div>
                                </div>
                        </div>
                        {isEditStackOpen && <EditStack stack={props.stack} onSave={onSave} onCancel={onCancel}/>}
                        {isCreateCardOpen && <CreateCard onCreate={onCardCreate} onCancel={onCardCancel}/>}
                </div>
        );
}

export default Stack;
