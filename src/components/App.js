import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import StackList from './StackList';

class App extends Component {
  render() {

    return (
      <Fragment>
        <h2>Flashcard PRO</h2>
        <hr/>
        <StackList />
        <hr/>
        <Link to='stack_form'><h4>Create a new stack</h4></Link>
      </Fragment>
    );
  }
}

export default App;
