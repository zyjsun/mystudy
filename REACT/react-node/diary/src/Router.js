import React from 'react';
// import { Button } from 'antd-mobile';
// function App () {
//   return (
//     <div>app
//       <Button type='primary'>zzz</Button>
//     </div>
//   )
// }
import Home from './Home';
import Detail from './Detail';
import Edit from './Edit';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
const RouterMap = () => {
  return <Router>
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/detail' component={Detail}></Route>
      <Route exact path='/edit' component={Edit}></Route>
    </Switch>
  </Router>
}

export default RouterMap