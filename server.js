'use strict';

const Hapi = require('hapi');
const Path = require('path');

const server = new Hapi.Server({
  connections: {
    routes: {
      files: {
        relativeTo: Path.join(__dirname, 'public')
      }
    }
  }
});
server.connection({
  port: 4000
});

server.register(require('inert'), (err) => {

  if (err) {
    throw err;
  }



  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: '.',
        redirectToSlash: true,
        index: true
      }
    }
  });

});



server.start((err) => {

  if (err) {
    throw err;
  }
  console.log('Hapi Server Running At:', server.info.uri);
});
