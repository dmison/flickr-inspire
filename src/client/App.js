import React, { Component } from 'react';
import './app.css';
import Interesting from './components/Interesting';
import PhotoView from './components/PhotoView';
import Pager from './components/Pager';

export default class App extends Component {
  state={
    page: 1,
    pages: 1,
    per_page: 10,
    view_id: null,
    view_secret: null
  };

  selectPhoto(id, secret) {
    this.setState({ view_id: id, view_secret: secret });
  }

  render() {
    const {
      page, per_page, pages, view_id, view_secret
    } = this.state;
    return (
      <div>
        <h1>Get Inspired</h1>
        <Interesting
          page={page}
          per_page={per_page}
          onGotPageTotal={(pages) => { this.setState({ pages }); }}
          onSelect={(id, secret) => this.selectPhoto(id, secret)}
        />
        <Pager
          page={page}
          pages={pages}
          per_page={per_page}
          onChangePerPage={(per_page) => { this.setState({ per_page }); }}
          onChangePage={(page) => { this.setState({ page }); }}
        />
        <PhotoView id={view_id} secret={view_secret} />
      </div>
    );
  }
}
