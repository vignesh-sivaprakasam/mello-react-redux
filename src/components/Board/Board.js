import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import './Board.css';

import {fetchBoardDetails} from '../../redux/Board/BoardActions';

function Board(props) {
        useEffect(()=>{
                props.fetchBoardDetails(props.id);
        },[]);
        return (
                <div className="boardView flex">
                        <div className="flex">

                        </div>
                        <div>
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
