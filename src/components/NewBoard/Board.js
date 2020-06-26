import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Stack from '../NewStack/Stack';
import CreateStack from '../Stack/CreateStack';

//css
import '../Board/Board.css';

//Redux
import {fetchBoardDetails} from '../../redux/Board/BoardActions';

function Board(props) {
        const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

        // console.log("Render ::", props);
        //Component Did Mount
        useEffect(() => {
                console.log("component did mount");
                props.fetchBoardDetails(props.id);
        }, []);

        let stacks = null;
        if(props.stacks){
                stacks = props.stacks.map(stack => {
                        return <Stack key={stack._id} stack={stack}/>;
                });
        }
        
        return (
                <div className="boardView flex">
                        <div className="flex">
                                {stacks}
                        </div>
                        <div className="flex">
                                <div className="addStack" onClick={() => setIsCreateDialogOpen(true)}> + Add Stack</div>
                        </div>
                        {
                                isCreateDialogOpen &&
                                <CreateStack
                                        onCreate={
                                                (name, color) => {
                                                        setIsCreateDialogOpen(false);
                                                        props.createStack(props.id, name, color);
                                                }
                                        }
                                        onCancel={() => setIsCreateDialogOpen(false)}
                                />
                        }
                </div>
        )
}

const mapStateToProps = state => {
        console.log("mapStateToProps ::", state);
        return {
                // id     : state.board.id,
                name: state.board.name,
                color: state.board.color,
                stacks: state.board.stacks
        }
}
const mapDispatchToProps = dispatch => {
        console.log("mapDispatchToProps ::: ");
        return {
                fetchBoardDetails: (id) => dispatch(fetchBoardDetails(id))
        }
}



export default connect(mapStateToProps, mapDispatchToProps)(Board);
