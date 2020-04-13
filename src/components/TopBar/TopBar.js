import React from 'react';
import './TopBar.css';
import '../../common.css';

const infoStyle = {
        width : '16px',
        height: '16px',
        border: '2px solid black'
};

const plusStyle = {
        width : '20px',
        height: '20px',
        border: '2px solid black'
}

const marginTop10 = {
        marginTop: '10px'
}

const fontWeight = {
        fontWeight:600
}

function TopBar() {
        return (
                <div className="topBar">
                        <div className="home">
                                <img src={require("./home.png")} alt="Home" width="50" height="35" />
                        </div>
                        <div className="boardName">
                                Vicky
                        </div>
                        <div>
                                <div style={infoStyle} className="circle">
                                        <span className="info">i</span>
                                </div>
                        </div>

                        <div className="add_task">
                                <div style={plusStyle} className="circle">
                                        <div style={fontWeight} className="center_abs">+</div>
                                </div>
                        </div>
                        
                        <div className="checked" style={marginTop10}>
                                <img src={require("./checked.png")} alt="Checked" width="24" height="24" />
                        </div>

                        <div className="notification">
                                <img src={require("./notification.png")} alt="notification" width="24" height="24" />
                        </div>  
                </div>
        );
}

export default TopBar
