import React, { useEffect, useRef } from 'react';

import './Stack.css';

function Stack(props) {
        const stackHeaderRef = useRef(null);
        useEffect(() => {
                stackHeaderRef.current.textContent = props.stack.name;
        }, []);
        const styles = {
                backgroundColor: props.stack.color
        }
        return (
                <div className="stack flex flex_column">
                        <div style={styles} className="stack_header flex">
                                <div id="stackName" ref={stackHeaderRef} contentEditable="true" className="stack_name"></div>
                                <div className="stack_menu cursor_pointer">
                                        <img src={require("../TopBar/3dotsHori.png")} height="32" width="32" alt="" />
                                </div>
                        </div>
                        <div className="card_holder"></div>
                        <div className="stack_footer">
                                <div className="createCard circle center_margin cursor_pointer">
                                        <div className="center_abs">+</div>
                                </div>
                        </div>
                </div>
        );
}

export default Stack;
