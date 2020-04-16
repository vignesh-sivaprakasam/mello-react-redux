import React from 'react';

const styles = {
        width  : '400px',
        height : '450px'
}
const justifyContentEnd = {
        justifyContent: 'flex-end'
}
function BoardCreateDialog() {
        return (
                <div style={styles} className="center_abs">
                        <div className="board_list_container flex flex_column">
                                <div className="text_center"> Create Board</div>
                                <div className="board_list">
                                
                                </div>
                                <div style={justifyContentEnd} className="flex">
                                        <div className="save cursor_pointer">Create</div>
                                        <div className="cancel cursor_pointer">Cancel</div>
                                </div>
                        </div>
                </div>
        )
}

export default BoardCreateDialog;
