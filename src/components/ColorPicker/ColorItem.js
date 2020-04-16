import React from 'react'

function ColorItem(props) {
        const color = { backgroundColor : props.color};
        return (
                <div className="color_item cursor_pointer flex">
                        <div style={color} className="color_holder">
                        </div>
                </div>
        )
}

export default ColorItem
