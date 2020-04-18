import React,{useRef, useEffect} from 'react'

const styles = {
        width  : '400px',
        height : '450px'
}
const justifyContentEnd = {
        justifyContent: 'flex-end'
}
function CreateCard(props) {

        const nameRef = useRef(null);
        const descRef = useRef(null);

        useEffect(()=>{
                nameRef.current.textContent = "New Card";
                // setTimeout(function(){nameRef.current.focus()},1000);
                console.log(nameRef.current);
        },[]);

        const onCreateClick = () => {
                props.onCreate(nameRef.current.textContent, descRef.current.value);
        }
        const onCancelClick = () => {
                props.onCancel();
        }
        return (
                <div>
                      <div style={styles} className="center_abs">
                        <div className="board_edit_container flex flex_column">
                                <div className="edit_header text_center"> Create Card</div>
                                <div className="flex1">
                                        <div className="labelContainer">
                                                <div className="board_name_title">Name</div>
                                                <div ref={nameRef} contentEditable="true" className="board_name_value"></div>
                                        </div>
                                        <div className="labelContainer">
                                                <div className="board_name_title">Description</div>
                                                <textarea ref={descRef} className="card_description_edit">
                                                </textarea>
                                        </div>
                                </div>
                                <div style={justifyContentEnd} className="edit_footer flex">
                                        <div className="save cursor_pointer" onClick={onCreateClick}>Create</div>
                                        <div className="cancel cursor_pointer" onClick={onCancelClick}>Cancel</div>
                                </div>
                        </div>
                </div>  
                </div>
        )
}

export default CreateCard;
