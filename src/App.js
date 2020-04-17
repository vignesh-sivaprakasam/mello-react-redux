import React, { useState } from 'react';
import {Provider} from 'react-redux';
import store from './redux/Store';

import TopBar from './components/TopBar/TopBar';
import MiddleBar from './components/MiddleBar/MiddleBar';
import BoardListingContainer from './components/BoardListing/BoardListingContainer';


function App() {
	const [isDialogOpen, setIsDialogOpen] = useState(true);
	const onClick = (id) => {
		console.log("id : ",id);
		setIsDialogOpen(false);	
	}
	return (
		<React.Fragment>
			<Provider store={store}>
				<TopBar />
				<MiddleBar />
				{isDialogOpen ? <BoardListingContainer onClick={onClick} /> : null}
			</Provider>                 
		</React.Fragment>     
	)
}

export default App;