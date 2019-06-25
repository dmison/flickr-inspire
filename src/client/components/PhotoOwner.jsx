import React from 'react';
import { string } from 'prop-types';

const PhotoOwner = ({ username, realname, location }) => (
  <ul>
    <li>
      <strong>username:</strong>
      {' '}
      {username}
    </li>
    <li>
      <strong>location:</strong>
      {' '}
      {location}
    </li>
  </ul>
);

PhotoOwner.defaultProps = {
  username: '',
  realname: '',
  location: ''
};

PhotoOwner.propTypes = {
  username: string,
  realname: string,
  location: string
};

export default PhotoOwner;
