import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import './Board.css';

import {fetchBoardDetails} from '../../redux/Board/BoardActions';

function Board(props) {
        console.log("board conmponent : ",props.id);
        useEffect(()=>{
                props.fetchBoardDetails(props.id);
        },[]);
        return (
                <div>
                        
                </div>
        )
}

const mapStateToProps = (state) => {
        return {

        }
}

const mapDispatchToProps = (dispatch) => {
        return {
                fetchBoardDetails : (id) => dispatch(fetchBoardDetails(id))
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
