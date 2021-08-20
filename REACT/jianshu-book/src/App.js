import { Globalstyle } from './style.js'
import Header from './common/header'
import { Provider } from 'react-redux'
import store from './store/index.js';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Detial from './pages/detail';
import Login from './pages/login/index.js';
function App () {
  return (
    <div>
      <Globalstyle />
      <Provider store={store}>

        <BrowserRouter>
          <Header />
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/detail' component={Detial}></Route>
          <Route exact path='/login' component={Login}></Route>
        </BrowserRouter>
      </Provider>

    </div>
  );
}

export default App;
