import React, { Component } from 'react';
import FrontpageComponent from './components/Frontpage'
import LogIn from './components/Signin'
import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Link, 
  Redirect 
} from 'react-router-dom';


class App extends Component {
  
  render(){
    const homePath = "/"
    const getStartedPath = "/getstarted/"
    const loginPath = "/login/"

    return (
      <Router>
        <Switch>
        <Route exact path={homePath} component={FrontpageComponent} />
        <Route exact path={getStartedPath} component={FrontpageComponent} />
        <Route exact path={loginPath} component={LogIn} />
        </Switch>
        
      </Router>
    );
  }
}

export default App;
