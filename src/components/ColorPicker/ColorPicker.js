import React from 'react';
import ColorItem from './ColorItem';
import './ColorPicker.css';

const colors = ["#d93651", "#ff9f1a", "#ffd500", "#8acc47", "#47cc8a", "#30bfbf", "#00aaff", "#8f7ee6", "#98aab3"];
function ColorPicker(props) {
        
        return (
                <div className="color_container flex">
                        {colors.map((color, index) => <ColorItem key={index} color={color}/>)}
                </div>
        )
}

export default ColorPicker
