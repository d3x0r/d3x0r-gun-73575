
var Gun = require( '..' );
var gun = new Gun();

var db = gun.get( "root" ).get( "messages" );
db.map().on( (v,f)=>console.log( 'msgs', f,'=',v) );
gun.get('root').map().on( (v,f)=>console.log( "root", f,'=',v) );
db.set( 1);
db.set(2);
db.put( "banana" );
db.set( 3 );

