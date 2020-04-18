import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import Stack from '../Stack/Stack';

import './Board.css';

import {fetchBoardDetails} from '../../redux/Board/BoardActions';

function Board(props) {
        useEffect(()=>{
                props.fetchBoardDetails(props.id);
        },[]);
        return (
                <div className="boardView flex">
                        <div className="flex">
                                {props.stacks != null && props.stacks.map(stack => <Stack key={stack._id} stack={stack} />)}
                        </div>
                        <div className="flex">
                                <div className="addStack"> + Add Stack</div>
                        </div>
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
                fetchBoardDetails : (id) => dispatch(fetchBoardDetails(id))
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
