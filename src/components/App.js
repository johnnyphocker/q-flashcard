import React, { Component, Fragment } from 'react';

import StackList from './StackList';

class App extends Component {
  render() {

    return (
      <Fragment>
        <h2>Flashcard PRO</h2>
        <hr/>
        <StackList />
      </Fragment>
    );
  }
}

export default App;
