import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './redux/Store';

import TopBar from './components/TopBar/TopBar';
import MiddleBar from './components/MiddleBar/MiddleBar';
import BoardListing from './components/BoardListing/BoardListing';

class App extends Component {
  render() {
    return (
        <React.Fragment>
                <Provider store={store}>
                        <TopBar />
                        <MiddleBar />
                        <BoardListing />
                </Provider>                 
        </React.Fragment>     
    );
  }
}

export default App;