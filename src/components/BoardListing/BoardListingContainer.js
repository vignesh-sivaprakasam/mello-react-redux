import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import BoardEditDialog from './BoardEditDialog';
import BoardCreateDialog from './BoardCreateDialog';
import BoardListing from './BoardListing';
import { getBoardList, saveBoard, createBoard, deleteBoard } from '../../redux/BoardList/BoardListActions';

import '../../common.css';
import './BoardListing.css';


const DIALOG_STATE = {
        MY_BOARD     : 1,
        EDIT_BOARD   : 2,
        CREATE_BOARD : 3
}

function BoardListingContainer(props) {
        const [dialogState, setDialogState] = useState(DIALOG_STATE.MY_BOARD);
        const [id, setID] = useState(null);
        useEffect(()=>{
                props.fetchBoardList();
        },[]);

        const editClick = (id) => {
                setID(id);
                setDialogState(DIALOG_STATE.EDIT_BOARD);
        }
        const createClick = () =>{
                setDialogState(DIALOG_STATE.CREATE_BOARD);
        }
        const deleteClick = (id) => {
                props.deleteBoard(id);
        }

        const onSaveCallback = (name, color) => {
                setDialogState(DIALOG_STATE.MY_BOARD);
                props.saveBoard(id, name, color);
        }
        const onCancelCallback = () => {
                setDialogState(DIALOG_STATE.MY_BOARD);
        }

        const onCreateCallback = (name, color) => {
                setDialogState(DIALOG_STATE.MY_BOARD);
                props.createBoard(name, color);
        }

        let board;
        if(id !== null){
                board = props.boards.find(b => b._id === id);
        }

        return (
                (dialogState === DIALOG_STATE.MY_BOARD) 
                ? (<BoardListing boards={props.boards} onEdit={editClick} onCreate={createClick} onDelete={deleteClick}/>) 
                : (dialogState === DIALOG_STATE.CREATE_BOARD) 
                        ? <BoardCreateDialog onCreate={onCreateCallback} onCancel={onCancelCallback}/> 
                        : <BoardEditDialog id={id} board={board} onSave={onSaveCallback} onCancel={onCancelCallback}/>
        );
}

const mapStateToProps = (state) => {
        return {
                boards : state
        };
}

const mapDispatchToProps = (dispatch) => {
        return {
                fetchBoardList : () => dispatch(getBoardList()),
                saveBoard      : (id, name, color) => dispatch(saveBoard(id, name, color)),
                createBoard    : (name, color) => dispatch(createBoard(name, color)),
                deleteBoard    : (id) => dispatch(deleteBoard(id))
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardListingContainer);
