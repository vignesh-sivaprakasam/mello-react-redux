import React, { useState, useContext } from 'react';
import Menu from '../Menu/Menu';
import MenuItem from '../Menu/MenuItem';


import {BoardContext} from '../Board/NewBoard';

import EditStack from './EditStack';
import CreateCard from '../Card/CreateCard';

import Card from '../Card/NewCard';

//React Drag and Drop
import { Droppable } from 'react-beautiful-dnd';

//css
import '../Stack/Stack.css';


function Stack(props) {

        const [isMenuOpen, setIsMenuOpen] = useState(false);

        const [isEditStackOpen, setIsEditStackOpen] = useState(false);

        const [isCreateCardOpen, setIsCreateCardOpen] = useState(false);

        const boardContext = useContext(BoardContext);

        // console.log("card order : ", props);
        let cards = null;
        if (props.stack.card_order) {
                cards = props.stack.card_order.map((cardID, index) => {
                        return <Card key={cardID} stackID={props.stack._id} card={props.stack.cards[cardID]} index={index} />;
                });
        }
        // console.log("BC :", boardContext);
        // console.log("Stack Render", isEditStackOpen);

        return (
                <div className="stack flex flex_column">
                        <div style={{ backgroundColor: props.stack.color }} className="stack_header flex">
                                <div id="stackName" className="stack_name">{props.stack.name}</div>
                                <div className="stack_menu cursor_pointer" onClick={() => setIsMenuOpen(isMenuOpen=> !isMenuOpen)}>
                                        <img src={require("../TopBar/3dotsHori.png")} height="32" width="32" alt="" />
                                        {isMenuOpen &&
                                                <Menu>
                                                        <MenuItem
                                                                onClick={
                                                                        (ev) => {
                                                                                setIsEditStackOpen(true);
                                                                                setIsMenuOpen(false);
                                                                                ev.stopPropagation();
                                                                        }
                                                                }
                                                        >EditStack</MenuItem>
                                                        <MenuItem
                                                                onClick={
                                                                        ()=>{
                                                                                setIsMenuOpen(false);
                                                                                boardContext.deleteStack(props.stack._id);
                                                                        }
                                                                }
                                                        >DeleteStack</MenuItem>
                                                </Menu>
                                        }
                                </div>
                        </div>
                        <Droppable droppableId={props.stack._id}>
                                {
                                        (provided, snapshot) => {
                                                return (
                                                        <div
                                                                className="flex1 flex flex_column card_holder"
                                                                style={{
                                                                        background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey'
                                                                }}
                                                                {...provided.droppableProps}
                                                                ref={provided.innerRef}
                                                        >
                                                                {cards}
                                                                {provided.placeholder}
                                                        </div>
                                                )
                                        }
                                }
                        </Droppable>

                        <div className="stack_footer">
                                <div className="createCard circle center_margin cursor_pointer" onClick={() => setIsCreateCardOpen(true)}>
                                        <div className="center_abs">+</div>
                                </div>
                        </div>

                        {isEditStackOpen &&
                                <EditStack
                                        stack={props.stack}
                                        onSave={
                                                (name, color) => {
                                                        setIsEditStackOpen(false);
                                                        boardContext.editStack(props.stack._id, name, color);
                                                }
                                        }
                                        onCancel={() => setIsEditStackOpen(false)}
                                />
                        }
                        {isCreateCardOpen &&
                                <CreateCard
                                        onCreate={
                                                (title, description) => {
                                                        setIsCreateCardOpen(false);
                                                        boardContext.createCard(props.stack._id, title, description);
                                                }
                                        }
                                        onCancel={() => setIsCreateCardOpen(false)}
                                />
                        }
                </div>
        )
}

export default Stack;
