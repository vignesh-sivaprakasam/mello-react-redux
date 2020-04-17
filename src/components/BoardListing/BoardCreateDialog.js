import React, {useState, useRef, useEffect} from 'react';
import ColorPicker from '../ColorPicker/ColorPicker';

const styles = {
        width  : '400px',
        height : '450px'
}
const justifyContentEnd = {
        justifyContent: 'flex-end'
}
function BoardCreateDialog(props) {

        const [color, setColor] = useState(ColorPicker.getDefaultColor());
        const nameRef = useRef(null);

        useEffect(()=>{
                nameRef.current.textContent = "NewBoard";
                // setTimeout(function(){nameRef.current.focus()},1000);
                console.log(nameRef.current);
        },[]);

        const onColorChange = (newColor) => {
                console.log("color Changed:: ", newColor);
                setColor(newColor);
        }
        const onCreateClick = () => {
                console.log(" ", nameRef.current.textContent,  " color :", color);
                props.onCreate(nameRef.current.textContent, color);
        }

        const onCancelClick = () => {
                props.onCancel();
        }


        return (
                <div style={styles} className="center_abs">
                        <div className="board_edit_container flex flex_column">
                                <div className="edit_header text_center"> Create Board</div>
                                <div className="flex1">
                                        <div className="labelContainer">
                                                <div className="board_name_title">Name</div>
                                                <div ref={nameRef} contentEditable="true" className="board_name_value"></div>
                                        </div>
                                        <div className="labelContainer">
                                                <div className="board_color_title">Color</div>
                                                <div className="board_color_value">
                                                        <ColorPicker activeColor={color} onColorChange={onColorChange}/>
                                                </div>
                                        </div>
                                </div>
                                <div style={justifyContentEnd} className="edit_footer flex">
                                        <div className="save cursor_pointer" onClick={onCreateClick}>Create</div>
                                        <div className="cancel cursor_pointer" onClick={onCancelClick}>Cancel</div>
                                </div>
                        </div>
                </div>
        )
}

export default BoardCreateDialog;
