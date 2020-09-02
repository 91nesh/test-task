import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

import 'semantic-ui-css/semantic.min.css'
import './index.css';

import TopMenu from './components/core/topMenu';
import Home from "./components/page/home";
import Friends from "./components/page/friends";

const store = createStore(
  reducers,
  applyMiddleware(reduxThunk)
);


const Page404 = () => (
  <div>
    <h1>Page not found - 404</h1>
  </div>
)


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>

      <TopMenu></TopMenu>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact component={Home} />
        <Route path="/friends" exact component={Friends} />

        <Route path="*">
          <Page404 />
        </Route>
      </Switch>


    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);