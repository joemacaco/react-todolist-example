import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './appStyles';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul>
          <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/about" activeStyle={{ color: 'green' }}>About</NavLink></li>
          <li><NavLink to="/repos/react-router" activeStyle={styles.active}>Repos</NavLink></li>
          <li><NavLink to="/user" activeClassName="active">User</NavLink></li>
          <li><NavLink to="/contacts" activeClassName="active">Contacts</NavLink></li>
        </ul>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.object,
};

export default App;