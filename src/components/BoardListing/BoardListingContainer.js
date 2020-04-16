import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import BoardEditDialog from './BoardEditDialog';
import BoardCreateDialog from './BoardCreateDialog';
import BoardListing from './BoardListing';
import { getBoardList } from '../../redux/BoardList/BoardListActions';

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

        // let board = null;
        const editClick = (id) => {
                console.log("edit click", id);
                setID(id);
                setDialogState(DIALOG_STATE.EDIT_BOARD);
        }

        const createClick = () =>{
                setDialogState(DIALOG_STATE.CREATE_BOARD);
        }

        const onSaveCallback = () => {
                console.log("save callback");
                setDialogState(DIALOG_STATE.MY_BOARD);
        }
        const onCancelCallback = () => {
                console.log("cancel callback");
                setDialogState(DIALOG_STATE.MY_BOARD);
        }

        const onCreateCallback = () => {
                console.log("create callback");
        }

        let board;
        if(id !== null){
                board = props.boards.find(b => b._id === id);
        }

        return (
                (dialogState === DIALOG_STATE.MY_BOARD) 
                ? (<BoardListing boards={props.boards} onEdit={editClick} onCreate={createClick}/>) 
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
                fetchBoardList : () => dispatch(getBoardList())
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardListingContainer);
