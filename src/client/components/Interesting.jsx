import React from 'react';
import PhotoList from './PhotoList';

class Interesting extends React.Component {
  state = {
    photos: [],
    loading: false
  };


  componentDidMount() {
    this.getInteresting();
  }

  componentDidUpdate(prevProps) {
    const { page, per_page } = this.props;
    const { page: prev_page, per_page: prev_per_page } = prevProps;
    if (prev_page !== page || prev_per_page !== per_page) {
      this.getInteresting();
    }
  }


  getInteresting() {
    const { page, per_page, onGotPageTotal } = this.props;
    this.setState({ loading: true });

    fetch(`/api/getInteresting/${page}/${per_page}`)
      .then(res => res.json())
      .then((photos) => {
        onGotPageTotal(photos.pages);
        this.setState(
          {
            photos: photos.photo,
            loading: false
          }
        );
      });
  }


  render() {
    const { photos, loading } = this.state;
    const { onSelect } = this.props;
    return (
      <div>
        <PhotoList photos={photos} onSelect={onSelect} />
        {loading ? <div>loading...</div> : <br />}
      </div>
    );
  }
}

export default Interesting;
