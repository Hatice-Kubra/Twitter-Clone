import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import './index.css';
import App from './App';
import SignUp from "./components/auth/SignUp";
import Login from "./components/auth/Login";
import * as serviceWorker from './serviceWorker';


const Root = () => {
  return(
  <Router>
    <Switch>
      <Route exact path ="/" component={App}/>
      <Route path ="/signup" component={SignUp}/>
      <Route path ="/login" component={Login}/>
    </Switch>
  </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
