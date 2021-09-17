import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/home/home';
import signIn from './pages/signin/signin';
class app extends Component {
  render () {
    return (
      <Fragment>
        <div className='container' style={{ overflow: 'hidden' }}>
          <Router>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/signin' component={signIn}></Route>
          </Router>
        </div>
        <div></div>
      </Fragment>

    );
  }
}

export default app;
