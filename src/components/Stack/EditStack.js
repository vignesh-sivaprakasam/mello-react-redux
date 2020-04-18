import React ,{useState, useEffect, useRef} from 'react';
import ColorPicker from '../ColorPicker/ColorPicker';


const styles = {
        width : '400px',
        height : '450px'
}
const justifyContentEnd = {
        justifyContent: 'flex-end'
}
function EditStack(props) {
        const [color, setColor] = useState(props.stack.color);
        const nameRef = useRef(null);

        useEffect(()=>{
                nameRef.current.textContent = props.stack.name;
        },[]);

        const onColorChange = (newColor) => {
                console.log("color Changed:: ", newColor);
                setColor(newColor);
        }
        const onSaveClick = () => {
                console.log(" ", nameRef.current.textContent,  " color :", color);
                props.onSave(nameRef.current.textContent, color);
        }

        const onCancelClick = () => {
                props.onCancel();
        }


        console.log("Render",props);
        return (
                <div style={styles} className="center_abs">
                        <div className="board_edit_container flex flex_column">
                                <div className="edit_header text_center"> Edit Stack</div>
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
                                        <div className="save cursor_pointer" onClick={onSaveClick}>Save</div>
                                        <div className="cancel cursor_pointer" onClick={onCancelClick}>Cancel</div>
                                </div>
                        </div>
                </div>
        )
}

export default EditStack;
