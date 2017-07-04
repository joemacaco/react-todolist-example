import React from 'react';

class Repos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Repos</h3>
        <h5>{this.props.match.params.name}</h5>
      </div>
    );
  }
}

Repos.propTypes = {
  params: React.PropTypes.object,
};

export default Repos;