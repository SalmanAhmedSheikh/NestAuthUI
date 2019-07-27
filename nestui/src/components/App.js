import React from 'react';
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './Home';
import AuthenticateComponet from './AuthenticateComponent';
import Login from './login';

function App() {
  return (
  <BrowserRouter>
  <Switch>
  <Route path="/Login"  component={Login} /> 
    <Route path="/" exact component={Home} />
  </Switch>
  </BrowserRouter>
  );
}

export default App;
