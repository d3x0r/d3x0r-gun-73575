var Gun = require( '../' )

var gun = Gun( {file: "test3.json"} );
var siteDef = gun.get( "siteDef" );
var gunSite = gun.get( "siteDef:1" );

var o = {};
o[1] = { id:1,name:"Apple",address:"::1" };
siteDef.put( o ); 
gunSite.put( o[1] );

