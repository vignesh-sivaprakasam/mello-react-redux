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

        const editClick = (id) => {
                console.log("edit click", id);
                setID(id);
                setDialogState(DIALOG_STATE.EDIT_BOARD);
        }
        
        console.log("render call");
        return (
                (dialogState === DIALOG_STATE.MY_BOARD) 
                ? (<BoardListing boards = {props.boards} onEditCallback={editClick}/>) 
                : (dialogState === DIALOG_STATE.CREATE_BOARD) 
                        ? <BoardCreateDialog /> 
                        : <BoardEditDialog id={id}/>
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
