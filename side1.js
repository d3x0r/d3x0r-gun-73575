
var Gun = require( '../' );
var gunOpts = {peers:["ws://localhost:7734/gun"], file:'notnull' };
var gun = Gun( gunOpts );

var wakeup = gun.get( 'nothing' );

wakeup.map().val( (val,field)=>{ console.log( "(side1, nothing) new field: ", field, "=", val ); } );
wakeup.path( 'asdf').map().val( (val,field)=>{ console.log( "(side1, nothing.asdf) new field: ", field, "=", val ); } );

gun.get( "Services" ).path( 'registry').map().val( (val,field)=>{ console.log( "(side1, nothing.services) service Request: ", field, "=", val ); } );

// something that noone hears
wakeup.path( "asdf" ).put( {property:"notnull"} );

