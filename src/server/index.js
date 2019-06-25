require('dotenv').config();
const Flickr = require('flickrapi');
const express = require('express');

const app = express();
app.use(express.static('dist'));

app.get('/api/getPhoto/:id/:secret', (req, res) => {
  Flickr.tokenOnly({
    api_key: process.env.FLICKR_KEY
  }, (error, flickr) => {
    if (error) {
      console.error(error);
      res.send(error);
    }
    flickr.photos.getInfo({ photo_id: req.params.id, secret: req.params.secret }, (err, result) => {
      if (error) {
        res.send(error);
      }
      res.send(result.photo);
    });
  });
});

app.get('/api/getPhotoSizes/:id', (req, res) => {
  Flickr.tokenOnly({
    api_key: process.env.FLICKR_KEY
  }, (error, flickr) => {
    if (error) {
      console.error(error);
      res.send(error);
    }
    flickr.photos.getSizes(
      { photo_id: req.params.id },
      (err, result) => {
        if (error) {
          res.send(error);
        }
        res.send(result.sizes);
      }
    );
  });
});

app.get('/api/getInteresting/:page/:per_page', (req, res) => {
  Flickr.tokenOnly({
    api_key: process.env.FLICKR_KEY
  }, (error, flickr) => {
    if (error) {
      console.error(error);
      res.send(error);
    }
    flickr.interestingness.getList(
      { per_page: req.params.per_page, page: req.params.page },
      (err, result) => {
        if (error) {
          res.send(error);
        }
        res.send(result.photos);
      }
    );
  });
});

app.get('/api/getImage', (req, res) => {
  res.send('image');
});


app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
