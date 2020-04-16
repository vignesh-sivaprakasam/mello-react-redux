import React from 'react';
import ColorPicker from '../ColorPicker/ColorPicker';
import './BoardEditDialog.css';

const styles = {
        width : '400px',
        height : '450px'
}
const justifyContentEnd = {
        justifyContent: 'flex-end'
}
function BoardEditDialog(props) {
        return (
                <div style={styles} className="center_abs">
                        <div className="board_edit_container flex flex_column">
                                <div className="edit_header text_center"> Edit Board</div>
                                <div className="flex1">
                                        <div className="labelContainer">
                                                <div className="board_name_title">Name</div>
                                                <div contentEditable="true" className="board_name_value"></div>
                                        </div>
                                        <div className="labelContainer">
                                                <div className="board_color_title">Color</div>
                                                <div className="board_color_value">
                                                        <ColorPicker />
                                                </div>
                                        </div>
                                </div>
                                <div style={justifyContentEnd} className="edit_footer flex">
                                        <div className="save cursor_pointer">Save</div>
                                        <div className="cancel cursor_pointer">Cancel</div>
                                </div>
                        </div>
                </div>
        )
}

export default BoardEditDialog;
