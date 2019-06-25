import React from 'react';
import { makeFlickrURL } from '../../flickr_utils';


const PhotoList = props => (
  <div>
    {props.photos.map(({
      id, farm, server, secret, title
    }) => (
      <div style={{ display: 'inline-block', cursor: 'pointer' }} onClick={(event) => { props.onSelect(id, secret); }}>
        <img src={makeFlickrURL(id, farm, server, secret, 'q')} />
      </div>
    ))}
  </div>
);

export default PhotoList;
