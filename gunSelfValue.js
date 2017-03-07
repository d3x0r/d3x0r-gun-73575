
var Gun = require( "../" );

var gun = new Gun();


var root = gun.get( "root" );

root.map( dumpVal );
function dumpVal( v,f) {
console.log( "evented:", f, v );
}

var k1 = gun.get( "key1" );
k1.put( { name:"alice" } );
var k2 = gun.get( "key2" );
k2.put( { name:"bob" } );
console.log( "put k1 into root?" );
root.put( k1 );
console.log( "put k2 into root?" );
root.put( k2 );
