
var Gun = require( '../' );
var http = require('http');
var port = 7734;
var ip = '0.0.0.0';

var gun = Gun({
	file: 'hubdata.json',
	s3: {
		key: '', // AWS Access Key
		secret: '', // AWS Secret Token
		bucket: '' // The bucket you want to save into
	}
});

var server = http.createServer(function(req, res){
	// how does this care about '/gun'?
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

Gun.on('out', function(msg){
	msg = JSON.stringify({headers:{},body:msg});
	gunPeers.forEach( function(peer){ peer.send( msg ) })
})
function acceptConnection( connection ) {
    gunPeers.push( connection );
    connection.on( 'error',function(error){console.log( "WebSocket Error:", error ) } );
    connection.on( 'message',function(msg){gun.on('in',JSON.parse( msg).body)})
    connection.on( 'close', function(reason,desc){
        // gunpeers gone.
        var i = gunPeers.findIndex( function(p){return p===connection} );
        if( i >= 0 )
            gunPeers.splice( i, 1 );

    })
}

exports.server = server.listen(port, ip);


