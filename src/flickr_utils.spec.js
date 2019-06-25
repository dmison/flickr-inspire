/* global describe it */
import { expect } from 'chai';
import { makeFlickrURL } from './flickr_utils';

describe('makeFlickrURL()', () => {
  /* eslint-disable object-curly-newline */
  const urlParams = [
    { id: 12, farm: 34, server: 65, secret: 334, size: 'c', format: 'png' },
    { id: '12', farm: 34, server: 65, secret: 334, size: 'c' },
    { id: '12', farm: 34, server: 65, secret: 334 }
  ];
  /* eslint-enable object-curly-newline */

  // testing this function might be a little excessive because it doesn't do much
  it('should return appropriate URLs', () => {
    const expected = [
      'https://farm34.staticflickr.com/65/12_334_c.png',
      'https://farm34.staticflickr.com/65/12_334_c.jpg',
      'https://farm34.staticflickr.com/65/12_334_o.jpg'
    ];
    const actual = urlParams.map(
      (params, index) => makeFlickrURL(...Object.values(params)) === expected[index]
    );
    expect(actual).to.not.include(false);
  });
});
