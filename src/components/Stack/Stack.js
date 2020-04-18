import React, { useState, useEffect, useRef, useContext } from 'react';

import './Stack.css';
import EditStack from './EditStack';
import Menu from '../Menu/Menu';
import MenuItem from '../Menu/MenuItem';
import {BoardContext} from '../Board/Board';

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
        const boardContext = useContext(BoardContext);
        const onDeleteMenu = () => {
                setIsMenuOpen(false);
                boardContext.deleteStack(props.stack._id);
        }

        const onSave = (name, color) => {
                console.log(props.stack._id," onSave ", name, color);
                setIsEditStackOpen(false);
                boardContext.editStack(props.stack._id, name, color);
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
