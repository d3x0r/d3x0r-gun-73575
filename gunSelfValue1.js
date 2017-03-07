
var Gun = require( "../" );

var gun = new Gun();
var root = gun.get( "root" );

root.map().on( function(v,f){ dumpVal("root",v,f) } );
function dumpVal( leader, v,f) {
	
	console.log( leader, "evented:", f, v );
	this.path( f ).map().on( function(v,f2){dumpVal( f, v, f2 ) } );
}

var k1 = gun.get( "key1" );
k1.put( { name:"alice" } );
root.put( k1 );

