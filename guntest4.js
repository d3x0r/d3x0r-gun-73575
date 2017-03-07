
var Gun = require( "../" );

var gun = Gun( { file: "test.json" } );

var key1 = "Ident:1";

var root = gun.get( key1 );

root.put( { id:1, name: "first" } );
gun.get( "Idents" ).path( 1 ).put( { '#': key1 } );


var key2 = "Other:1";

var root2 = gun.get( key2 );
var o = { 1 : { id: 2, name: "second" } };
root2.put( o[1] );
gun.get( "others" ).put( o );


gun.get( "others" ).map ( (val,field)=>console.log( "others", field,"=",val ) );
gun.get( "Idents" ).map ( (val,field)=>console.log( "Idents:", field,"=",val ) );


