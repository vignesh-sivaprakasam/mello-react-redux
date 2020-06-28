import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Stack from '../Stack/NewStack';
import CreateStack from '../Stack/CreateStack';

//css
import '../Board/Board.css';

//Redux
import { fetchBoardDetails } from '../../redux/Board/BoardActions';
import {createStack, editStack, deleteStack} from '../../redux/Stack/StackActions';
import {createCard, deleteCard, moveCard, moveCardTemp} from '../../redux/Card/CardActions';

//React Drag and Drop
import { DragDropContext } from 'react-beautiful-dnd';


export const BoardContext = React.createContext();

function Board(props) {
        const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

        // console.log("Render ::", props);
        //Component Did Mount
        useEffect(() => {
                console.log("component did mount");
                props.fetchBoardDetails(props.id);
        }, []);

        let stacks = null;
        if (props.stacks) {
                stacks = props.stacks.map(stack => {
                        return <Stack key={stack._id} stack={stack} />;
                });
        }

        const onDragEnd = (result) => {

                const {draggableId : cardID,source,destination}         = result;
                const {droppableId : sourceStackID, index: sourceIndex} = source;
                const {droppableId : destinationStackID, index}         = destination;
                
                props.moveCardTemp(props.id, sourceStackID, cardID, sourceIndex,  destinationStackID, index);
                props.moveCard(props.id, sourceStackID, cardID, destinationStackID, index);
        }

        // console.log("New Board Render");
        return (
                <div className="boardView flex">
                        <div className="flex">
                                <DragDropContext onDragEnd={onDragEnd}>
                                        <BoardContext.Provider value={{
                                                editStack  : (stackID, name, color) => props.editStack(props.id, stackID, name, color),
                                                deleteStack: (stackID) => props.deleteStack(props.id, stackID),
                                                createCard : (stackID, title, description) => props.createCard(props.id, stackID, title, description),
                                                deleteCard : (stackID, cardID) => props.deleteCard(props.id, stackID, cardID)
                                        }}>
                                                {stacks}
                                        </BoardContext.Provider>
                                </DragDropContext>
                        </div>
                        <div className="flex">
                                <div className="addStack" onClick={() => setIsCreateDialogOpen(true)}> + Add Stack</div>
                        </div>
                        {
                                isCreateDialogOpen &&
                                <CreateStack
                                        onCreate={
                                                (name, color) => {
                                                        setIsCreateDialogOpen(false);
                                                        props.createStack(props.id, name, color);
                                                }
                                        }
                                        onCancel={() => setIsCreateDialogOpen(false)}
                                />
                        }
                </div>
        )
}

const mapStateToProps = state => {
        console.log("mapStateToProps ::", state);
        return {
                // id     : state.board.id,
                name: state.board.name,
                color: state.board.color,
                stacks: state.board.stacks
        }
}
const mapDispatchToProps = dispatch => {
        console.log("mapDispatchToProps ::: ");
        return {
                fetchBoardDetails: (id)                                            => dispatch(fetchBoardDetails(id)),
                createStack      : (boardID, name, color)                          => dispatch(createStack(boardID, name, color)),
                editStack        : (boardID, stackID, name, color)                 => dispatch(editStack(boardID, stackID, name, color)),
                deleteStack      : (boardID, stackID)                              => dispatch(deleteStack(boardID, stackID)),
                createCard       : (boardID, stackID, title, description)          => dispatch(createCard(boardID, stackID, title, description)),
                deleteCard       : (boardID, stackID, cardID)                      => dispatch(deleteCard(boardID, stackID, cardID)),
                moveCardTemp     : (boardID, stackID, cardID, sourceIndex, toStackID, position) => dispatch(moveCardTemp(boardID, stackID, cardID, sourceIndex, toStackID, position)),
                moveCard         : (boardID, stackID, cardID, toStackID, position) => dispatch(moveCard(boardID, stackID, cardID, toStackID, position))
        }
}



export default connect(mapStateToProps, mapDispatchToProps)(Board);
