
var Gun = require( "../" );
var gun = Gun();
var db = gun.get( "path" );

function logData(v,f) { console.log( "got:", f, "=",v ) }

db.map().on( logData );
db.path( 1 ).put( { name: "one", id:1 } );
db.path( 2 ).put( { name: "one", id:2 } );

setTimeout( ()=>{
	db.path( 2 ).put( null );
}, 10 );

