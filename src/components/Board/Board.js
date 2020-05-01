import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';

import Stack from '../Stack/Stack';
import CreateStack from '../Stack/CreateStack';
import {getDrag, getDrop, setDrag} from '../DragAndDropUtility';

import './Board.css';

import {fetchBoardDetails} from '../../redux/Board/BoardActions';
import {createStack, editStack, deleteStack} from '../../redux/Stack/StackActions';
import {createCard, deleteCard, moveCard} from '../../redux/Card/CardActions';


export const BoardContext = React.createContext();

function Board(props) {
        const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

        const onAddClick = () => {
                setIsCreateDialogOpen(true);
        }
        const onCreate = (name, color) => {
                setIsCreateDialogOpen(false);
                props.createStack(props.id, name, color);
        }
        const onCancel = () => setIsCreateDialogOpen(false);
        useEffect(()=>{
                props.fetchBoardDetails(props.id);
                setCanUpdate(true);
        },[]);

        const [canUpdate, setCanUpdate] = useState(false);
        let sCardOrders = Object.create(null);
        const [stackCardOrders, setStackCardOrders] = useState(sCardOrders);
        if(canUpdate && props.stacks){
                props.stacks.forEach((stack) => {
                        sCardOrders[stack._id] = {order : stack.card_order};
                });
                setStackCardOrders(sCardOrders);
                setCanUpdate(false);
        }
        // console.log(sCardOrders, " stack card or ::", stackCardOrders);
        const onCardMove = () => {

                const drag = getDrag();
                const drop = getDrop();

                const dragOrder = stackCardOrders[drag.curStackID].order;
                const dropOrder = stackCardOrders[drop.stackID].order;
                
                const newDragCardOrder = dragOrder.filter(cardID => !(cardID === drag.cardID));
                let newDropCardOrder;
                if(drag.curStackID === drop.stackID){
                        newDragCardOrder.splice(drop.position, 0, drag.cardID);
                        newDropCardOrder = newDragCardOrder;
                } else {
                        dropOrder.splice(drop.position, 0, drag.cardID);
                        newDropCardOrder = dropOrder;
                }

                setDrag({...drag, curStackID : drop.stackID});

                const newStackCardOrder = {...stackCardOrders};
                newStackCardOrder[drag.curStackID].order = newDragCardOrder;
                newStackCardOrder[drop.stackID].order = newDropCardOrder;
                
                setStackCardOrders(newStackCardOrder);
        }

        return (
                <div className="boardView flex">
                        <div className="flex">
                                <BoardContext.Provider value={
                                        {
                                                editStack: (stackID, name, color) =>{
                                                        props.editStack(props.id, stackID, name, color);
                                                },
                                                deleteStack : (stackID) => props.deleteStack(props.id, stackID),
                                                createCard  : (stackID, title, description) => props.createCard(props.id, stackID, title, description),
                                                deleteCard  : (stackID, cardID) => props.deleteCard(props.id, stackID, cardID),
                                                moveCard    : (stackID, cardID, toStackID, position) => props.moveCard(props.id, stackID, cardID, toStackID, position),
                                                onCardMove  : () => onCardMove()
                                        }
                                }>
                                        {props.stacks != null && props.stacks.map(stack => <Stack key={stack._id} stack={stack} cardOrder={stackCardOrders[stack._id] && stackCardOrders[stack._id].order} />)}
                                </BoardContext.Provider>
                        </div>
                        <div className="flex">
                                <div className="addStack" onClick={onAddClick}> + Add Stack</div>
                        </div>
                        {isCreateDialogOpen && <CreateStack onCreate={onCreate} onCancel={onCancel} /> }
                </div>
        )
}

const mapStateToProps = (state) => {
        return {
                // id     : state.board.id,
                name   : state.board.name,
                color  : state.board.color,
                stacks : state.board.stacks
        }
}

const mapDispatchToProps = (dispatch) => {
        return {
                fetchBoardDetails : (id) => dispatch(fetchBoardDetails(id)),
                createStack       : (boardID, name, color) => dispatch(createStack(boardID, name, color)),
                editStack         : (boardID, stackID, name, color) =>  dispatch(editStack(boardID, stackID, name, color)),
                deleteStack       : (boardID, stackID) => dispatch(deleteStack(boardID, stackID)),
                createCard        : (boardID, stackID, title, description) => dispatch(createCard(boardID, stackID, title, description)),
                deleteCard        : (boardID, stackID, cardID) => dispatch(deleteCard(boardID, stackID, cardID)),
                moveCard : (boardID, stackID, cardID, toStackID, position) => dispatch(moveCard(boardID, stackID, cardID, toStackID, position))
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
