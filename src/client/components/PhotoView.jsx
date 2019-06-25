import React from 'react';
import { string } from 'prop-types';
import PhotoOwner from './PhotoOwner';
import FlickrLinks from './FlickrLinks';
import { makeFlickrURL } from '../../flickr_utils';

class PhotoView extends React.Component {
  state = {
    loading: false,
    photo: null,
    sizes: null
  }

  componentDidMount() {
    const { id, secret } = this.props;
    if (id && secret) {
      this.getPhoto(id, secret);
    }
  }

  componentDidUpdate(prevProps) {
    const { id, secret } = this.props;
    const { id: prevId, secret: prevSecret } = prevProps;
    if (prevId !== id || prevSecret !== secret) {
      this.getPhoto(id, secret);
    }
  }


  getPhoto(id, secret) {
    this.setState({ loading: true });
    const urls = [
      `/api/getPhoto/${id}/${secret}`,
      `/api/getPhotoSizes/${id}`
    ];
    Promise.all(urls.map(url => fetch(url)
      .then(res => res.json())))
      .then(result => this.setState({
        photo: result[0],
        sizes: result[1],
        loading: false
      }));
  }

  render() {
    const { photo, loading, sizes } = this.state;

    if (loading) {
      return <div>loading...</div>;
    }

    if (photo) {
      return (
        <div>
          <h2>{photo.title._content}</h2>
          <FlickrLinks {...sizes} />
          <img src={makeFlickrURL(photo.id, photo.farm, photo.server, photo.secret, 'z')} />
          <div dangerouslySetInnerHTML={{ __html: photo.description._content }} />
          <PhotoOwner {...photo.owner} />
        </div>
      );
    }
    return null;
  }
}

PhotoView.defaultProps = {
  id: null,
  secret: null
};

PhotoView.propTypes = {
  id: string,
  secret: string
};

export default PhotoView;
