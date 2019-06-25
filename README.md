# Flickr Inspire

Rough prototype of React/Node fullstack app for viewing image from the Flickr Interestingness collection.

It's built up using the [simple-react-full-stack](https://github.com/crsandeep/simple-react-full-stack) boilerplate as a base.

Provided by boilerplate:

- **Babel** for transpilation
- **Webpack** for bunding
- **Webpack dev server** to build/host front-end in dev mode
- **Concurrently** to handle running the dev server & Express server code in parallel
- **Nodemon** to restart Express server in dev mode.
- **eslint** for Linting

Added:

- **dotenv** for populating environment variables from `.env` file
- **flickrapi** for accessing Flickr
- **Mocha** & **Chai** for tests (and **@babel/register**)

## Limits

1. Testing is minimal.
2. Styling is near non-existent
3. Server code is a little hacky & copy/paste between routes, flickrapi API should be refactored into it's own module/file.
4. No real need for a state management container here (Redux/MobX).  Any more features or UX complexity would probably start to require it.
5. The flickrapi takes a few minutes to download a bunch of JSON into the `data` directory the first time it is used.  

## Next steps

1. Styled Components (haven't used before but look pretty straight forward)
2. Refactor flickrapi usage into own file/module
3. You can actually get the image URLs with some extra params to the getInteresting endpoint, so should do that instead of using getSizes
4. Add a NPM script to pre-initialize the flickrapi data.
5. Maybe cache flickr data server and/or client side?  Client side cache would probably warrant state management.

## Development mode

Run `npm run dev`

In the development mode, we will have 2 servers running. The front end code will be served by the webpack dev server which helps with hot and live reloading. The server side Express code will be served by a node server using nodemon which helps in automatically restarting the server whenever server side code changes.

The Node server runs on port `8080`.

Webpack dev server runs on port `3000` and proxies the `/api` requests to port `8080`.

## Production mode

To build production: `npm run build`

To run production: `npm start`

In the production mode, we will have only 1 server running. All the client side code will be bundled into static files using webpack and it will be served by the Node.js/Express application.
