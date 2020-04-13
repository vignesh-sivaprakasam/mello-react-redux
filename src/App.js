import React, { Component } from 'react';
import TopBar from './components/TopBar/TopBar';
import MiddleBar from './components/MiddleBar/MiddleBar';

class App extends Component {
  render() {
    return (
        <React.Fragment>
                <TopBar />
                <MiddleBar />
        </React.Fragment>     
    );
  }
}

export default App;