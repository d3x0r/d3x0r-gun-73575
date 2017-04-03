
var Gun = require( '../' );
var http = require('http');
var port = 7734;
var ip = '0.0.0.0';

Gun.on('out', function(msg){
	this.to.next( msg );
	msg = JSON.stringify(msg);
	gunPeers.forEach( function(peer){ peer.send( msg ) })
})

var gun = Gun({
	file: 'hubdata.json',
});

var server = http.createServer(function(req, res){
	stream.end(); // stream
});
//gun.wsp(server);

var ws = require( 'ws' ); // default websocket provider gun used...
var WebSocketServer = ws.Server;

var wss = new WebSocketServer( {
        server: server, // 'ws' npm
        autoAcceptConnections : false // want to handle the request (websocket npm?)
    } );

wss.on('connection',acceptConnection )

var gunPeers = [];  // used as a list of connected clients.

function acceptConnection( connection ) {
    gunPeers.push( connection );
    connection.on( 'error',function(error){console.log( "WebSocket Error:", error ) } );
    connection.on( 'message',function(msg){gun.on('in',JSON.parse( msg))})
    connection.on( 'close', function(reason,desc){
        // gunpeers gone.
        var i = gunPeers.findIndex( function(p){return p===connection} );
        if( i >= 0 )
            gunPeers.splice( i, 1 );

    })
}

exports.server = server.listen(port, ip);


