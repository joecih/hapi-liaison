'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({
  port: 4000
});

server.register(require('inert'), (err) => {
  server.route({
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
      reply.file('./public/index.html');
    }
  });
});



server.start((err) => {

  if (err) {
    throw err;
  }
  console.log('Hapi Server Running At:', server.info.uri);
});
