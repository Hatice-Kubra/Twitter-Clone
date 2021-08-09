import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import firebase from "./firebase1";
import store from "../src/components/store/store";
import { Provider } from "react-redux";
import {
  ReactReduxFirebaseProvider,
  firebaseReducer
} from 'react-redux-firebase';
import { useHistory } from "react-router-dom";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import App from "./App";
import SignUp from "./components/auth/SignUp";
import Login from "./components/auth/Login";
import * as serviceWorker from './serviceWorker';

const rrfConfig = {
  userProfile: "users",
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
};

const Root = () => (

    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
    </Switch>

);

ReactDOM.render(
  <React.StrictMode>
    <App />

    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Router>
          <Root />
        </Router>
      </ReactReduxFirebaseProvider>
    </Provider>,
  </React.StrictMode>,
  document.getElementById("root")
);


serviceWorker.unregister();