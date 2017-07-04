import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, MemoryRouter, StaticRouter, HashRouter, BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/App';
import Home from './components/Home';
import Repos from './components/Repos';
import About from './components/About';
import User from './components/User';
import Contacts from './components/Contacts';
import createBrowserHistory  from 'history/createBrowserHistory'

const history = createBrowserHistory ();

ReactDOM.render(
  <Router history={history}>
    <div>
      <App />
      <Switch>
        <Route exact path="/"component={Home} />
        <Route path="/repos/:name" component={Repos} />
        <Route path="/about" component={About} />
        <Route path="/user" component={User} />
        <Route path="/contacts" component={Contacts} />
      </Switch>
    </div>
  </Router>,
  document.getElementById('app')
);