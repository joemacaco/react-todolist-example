import React from 'react';

const Contact = ({ match }) => (
  <div>
    <h3>{match.params.contact}</h3>
  </div>
)

export default Contact;