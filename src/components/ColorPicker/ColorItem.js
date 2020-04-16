import React from 'react'

function ColorItem(props) {
        const color = { backgroundColor : props.color};
        let classNames = "color_item cursor_pointer flex";
        if(props.active){
                classNames += " active";
        }
        const onClick = () => {
                props.onColorChange(props.color);
        }
        return (
                <div className={classNames} onClick={onClick}>
                        <div style={color} className="color_holder">
                        </div>
                </div>
        )
}

export default ColorItem
