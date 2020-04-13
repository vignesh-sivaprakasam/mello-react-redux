import React from 'react';
import BoardContainer from '../Board/BoardContainer';
import '../../common.css';

const middleBarStyle = {
        overflow: scroll
}

function MiddleBar() {
        return (
                <div style={middleBarStyle} className="flex flex1">
                     <BoardContainer />   
                </div>
        );
}

export default MiddleBar;
