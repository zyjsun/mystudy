import { Globalstyle } from './style.js'
import Header from './common/header'
import { Provider } from 'react-redux'
import store from './store/index.js';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Detial from './pages/detail';
function App () {
  return (
    <div>
      <Globalstyle />
      <Provider store={store}>
        <Header />
        <BrowserRouter>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/detail' component={Detial}></Route>
        </BrowserRouter>
      </Provider>

    </div>
  );
}

export default App;
