import React from 'react';
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './Home';
import AuthenticateComponet from './AuthenticateComponent';
import Login from './login';
import Protected from './Protected';

function App() {
  return (
  <BrowserRouter>
  <Switch>
  <Route path="/Login"  component={Login} /> 
    <Route path="/" exact component={Home} />
    <AuthenticateComponet>
    <Route path="/Protected" component={Protected} />
    </AuthenticateComponet>
  </Switch>
  </BrowserRouter>
  );
}

export default App;
