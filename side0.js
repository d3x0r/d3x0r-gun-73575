
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
	console.log( "connect." );
	if(gun.wsp.server(req, res)){
        console.log( "websock request?" );
		return; // filters gun requests!
	}
	stream.end(); // stream
});
gun.wsp(server);
exports.server = server.listen(port, ip);

/*
// setup events on first path 'asdf' 
var db = gun.get( "nothing" );
db.path( "asdf" ).on( (val,field)=>{ console.log( "(side0, nothing.asdf)on new field: ", field, "=", val ); } );
db.path( "asdf" ).map( (val,field)=>{ console.log( "(side0, nothing.asdf)map new field: ", field, "=", val ); } );

// second path services...
var svc = gun.get( 'Services' );
svc.map( (val,field)=>{ console.log( "(side0, Services)Server Map service Request: ", field, "=", val ); } );
svc.map().val( (val,field)=>{ console.log( "(side0, Services)Server MapVal service Request: ", field, "=", val ); } );
svc.path( "registry").map( (val,field)=>{ console.log( "(side0, Services.registry)Server Reg Map service Request: ", field, "=", val ); } );
svc.path( "registry").map().val( (val,field)=>{ console.log( "(side0, Services.registry)Server reg MapVal service Request: ", field, "=", val ); } );
*/


