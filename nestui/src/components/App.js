import React from 'react';
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './Home';
import AuthenticateComponet from './AuthenticateComponent';
import Login from './login';
import Dashboard from './Dashboard';
import test from './test';

function App() {
  return (
  <BrowserRouter >
  <Switch>
  
  <Route  path="/Login"  exact component={Login} /> 
  <Route path="/test" component={test} ></Route>
    <Route path="/" exact component={Home} />
    <AuthenticateComponet>
    <Route path="/Dashboard" exact component={Dashboard}  />
    </AuthenticateComponet>
  </Switch>
  </BrowserRouter>
  );
}

export default App;
