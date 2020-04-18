import React, { useState, useEffect, useRef } from 'react';

import './Stack.css';
import EditStack from './EditStack';
import Menu from '../Menu/Menu';
import MenuItem from '../Menu/MenuItem';

function Stack(props) {
        const [isMenuOpen, setIsMenuOpen] = useState(false);
        const [isEditStackOpen, setIsEditStackOpen] = useState(false);
        const openMenu = () => {
                setIsMenuOpen(true);
        }
        const onEditMenu = (ev) => {
                setIsEditStackOpen(true);
                setIsMenuOpen(false);
                ev.stopPropagation();
        }
        const onDeleteMenu = () => {
                setIsMenuOpen(false);
        }

        const onSave = (name, color) => {
                console.log("onSave", name, color);
                setIsEditStackOpen(false);
        }
        const onCancel = () => {
                setIsEditStackOpen(false);
        }


        const stackHeaderRef = useRef(null);
        useEffect(() => {
                stackHeaderRef.current.textContent = props.stack.name;
        }, []);

        return (
                <div className="stack flex flex_column">
                        <div style={{backgroundColor: props.stack.color}} className="stack_header flex">
                                <div id="stackName" ref={stackHeaderRef} contentEditable="true" className="stack_name"></div>
                                <div className="stack_menu cursor_pointer" onClick={openMenu}>
                                        <img src={require("../TopBar/3dotsHori.png")} height="32" width="32" alt="" />
                                        {isMenuOpen && <Menu>
                                                <MenuItem onClick={onEditMenu}>EditStack</MenuItem>
                                                <MenuItem onClick={onDeleteMenu}>DeleteStack</MenuItem>
                                        </Menu>}
                                </div>
                        </div>
                        <div className="card_holder">

                        </div>
                        <div className="stack_footer">
                                <div className="createCard circle center_margin cursor_pointer">
                                        <div className="center_abs">+</div>
                                </div>
                        </div>
                        {isEditStackOpen && <EditStack stack={props.stack} onSave={onSave} onCancel={onCancel}/>}
                </div>
        );
}

export default Stack;
