import React from 'react';
import ColorItem from './ColorItem';
import './ColorPicker.css';

const colors = ["#d93651", "#ff9f1a", "#ffd500", "#8acc47", "#47cc8a", "#30bfbf", "#00aaff", "#8f7ee6", "#98aab3"];
function ColorPicker(props) {
        const activeColor = props.activeColor || colors[0];
        const onColorChange = (color) => {
                props.onColorChange(color);
        }
        return (
                <div className="color_container flex">
                        {colors.map((color, index) => <ColorItem key={index} color={color} active={color === activeColor} onColorChange={onColorChange}/>)}
                </div>
        )
}
export const getDefaultColor = () => {
        return colors[0];
}

export default ColorPicker;
