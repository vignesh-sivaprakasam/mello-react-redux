import React from 'react';
import Board from '../NewBoard/Board';
import '../../common.css';

const middleBarStyle = {
        overflow: scroll
}

function MiddleBar(props) {
        return (
                <div style={middleBarStyle} className="flex flex1">
                        <div className="boardContainer">
                                {props.id ? <Board id={props.id} /> : null}
                        </div>
                </div>
        );
}

export default MiddleBar;
