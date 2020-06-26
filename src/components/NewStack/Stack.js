import React, {useState} from 'react';
import Menu from '../Menu/Menu';
import MenuItem from '../Menu/MenuItem';

import EditStack from '../Stack/EditStack';
import CreateCard from '../Card/CreateCard';

//css
import '../Stack/Stack.css';


function Stack(props) {

        const [isMenuOpen, setIsMenuOpen] = useState(false);

        const [isEditStackOpen, setIsEditStackOpen] = useState(false);

        const [isCreateCardOpen, setIsCreateCardOpen] = useState(false);

        return (
                <div className="stack flex flex_column">
                        <div style={{ backgroundColor: props.stack.color }} className="stack_header flex">
                                <div id="stackName" className="stack_name">{props.stack.name}</div>
                                <div className="stack_menu cursor_pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                        <img src={require("../TopBar/3dotsHori.png")} height="32" width="32" alt="" />
                                        {isMenuOpen &&
                                                <Menu>
                                                        <MenuItem
                                                                onClick={
                                                                        (ev) => {
                                                                                setIsEditStackOpen(true);
                                                                                ev.stopPropagation();
                                                                        }
                                                                }
                                                        >EditStack</MenuItem>
                                                        <MenuItem
                                                                onClick={
                                                                        {/*onDeleteMenu*/ }
                                                                }
                                                        >DeleteStack</MenuItem>
                                                </Menu>
                                        }
                                </div>
                        </div>

                        <div className="stack_footer">
                                <div className="createCard circle center_margin cursor_pointer" onClick={() => setIsCreateCardOpen(true)}>
                                        <div className="center_abs">+</div>
                                </div>
                        </div>

                        {isEditStackOpen &&
                                <EditStack
                                        stack={props.stack}
                                        onSave={
                                                (name, color) => {
                                                        setIsEditStackOpen(false);
                                                }
                                        }
                                        onCancel={() => setIsEditStackOpen(false)}
                                />
                        }
                        {isCreateCardOpen &&
                                <CreateCard
                                        onCreate={
                                                (title, description) => {
                                                        setIsCreateCardOpen(false);
                                                }
                                        }
                                        onCancel={() => setIsCreateCardOpen(false)}
                                />
                        }
                </div>
        )
}

export default Stack;
