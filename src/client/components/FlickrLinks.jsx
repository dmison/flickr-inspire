import React from 'react';
import { number, array } from 'prop-types';

const FlickrLinks = ({ candownload, size }) => {
  let url = '';
  if (candownload === 1) {
    url = size.filter(s => s.label === 'Original')[0].source;
  } else {
    url = size[size.length - 1].source;
  }
  return (
    <div>
      <a href={url} target="_blank">
        View largest
        {candownload === 1 ? '(original)' : ''}
      </a>
    </div>
  );
};


FlickrLinks.defaultProps = {
  candownload: 0,
  size: []
};


FlickrLinks.propTypes = {
  candownload: number,
  size: array
};

export default FlickrLinks;
