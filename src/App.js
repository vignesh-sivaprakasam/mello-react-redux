import React, { useState } from 'react';
import {Provider} from 'react-redux';
import store from './redux/Store';

import TopBar from './components/TopBar/TopBar';
import MiddleBar from './components/MiddleBar/MiddleBar';
import BoardListingContainer from './components/BoardListing/BoardListingContainer';


function App() {
	const [isDialogOpen, setIsDialogOpen] = useState(true);
	const [boardID, setBoardID]           = useState(null);
	const onClick = (id) => {
		console.log("id : ",id);
		setBoardID(id);
		setIsDialogOpen(false);	
	}
	return (
		<React.Fragment>
			<Provider store={store}>
				<TopBar />
				<MiddleBar id={boardID} />
				{isDialogOpen ? <BoardListingContainer onClick={onClick} /> : null}
			</Provider>                 
		</React.Fragment>     
	)
}

export default App;