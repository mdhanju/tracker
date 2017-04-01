'use strict';

const net = require('net');
const express = require('express')
const app = express()

var HOST = '127.0.0.1';
var PORT = process.env.PORT || 3000


function connHandler(socket) {

	// We have a connection - a socket object is assigned to the connection automatically
	console.log('CONNECTED: ' + socket.remoteAddress + ':' + socket.remotePort);
	console.log(`CONNECTED:  ${socket.remoteAddress}:${socket.remotePort}`);

	// Add a 'data' event handler to this instance of socket
	socket.on('data', function(data) {
		console.log(`DATA from :: ${socket.remoteAddress} ${data}`);
	});

	// Add a 'close' event handler to this instance of socket
	socket.on('close', function(data) {
		console.log(`CLOSED :: ${socket.remoteAddress}:${socket.remotePort}`);
	});

}

net.createServer(connHandler).listen(5050, function() {
	const address = this.address();
	console.log(`TCP SERVICE ${address.family} :: ${address.address}:${address.port}`);
});


app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(PORT, function () {
  console.log(`Express app is listening on port ${PORT}!`)
})
