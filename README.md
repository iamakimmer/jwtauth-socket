jwtauth-socket
==============

Authenticate [Socket.IO](http://socket.io/) Connection using JSON Web Tokens (jwt) and the [node-jwt-simple](https://github.com/hokaccha/node-jwt-simple) library

## Client Side:
Connect socket with adding a token as a query parameter: 

	var socket = io.connect('http://localhost', {
      query: 'token=abcdefghijklmnopqrstuvwxyz
  	});

## Server Side:

	var server = http.createServer(app);
    var io = require('socket.io').listen(server);
    io.configure(function() {        
        io.set('authorization', jwtAuth.auth('your jwt secret'));
    });    


	io.sockets.on('connection', function(socket) {
        console.log('decoded', socket.handshake.decoded); // decoded is your decided token
    });


