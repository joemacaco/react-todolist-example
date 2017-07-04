import React from 'react';
import { Route, Link } from 'react-router-dom';
import Contact from '../Contact/Contact';

const Contacts = ({ match }) => (
  <div>
    <h2>Contacts</h2>
    <ul>
      <li>
        <Link to={`${match.url}/joe`}>
          Joe
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/joema`}>
         Joema
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/joemacaco`}>
          Joemacaco
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:contact`} component={Contact}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a contact.</h3>
    )}/>
  </div>
);

export default Contacts;