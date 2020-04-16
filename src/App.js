import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './redux/Store';

import TopBar from './components/TopBar/TopBar';
import MiddleBar from './components/MiddleBar/MiddleBar';
import BoardListingContainer from './components/BoardListing/BoardListingContainer';

class App extends Component {
  render() {
    return (
        <React.Fragment>
                <Provider store={store}>
                        <TopBar />
                        <MiddleBar />
                        <BoardListingContainer />
                </Provider>                 
        </React.Fragment>     
    );
  }
}

export default App;