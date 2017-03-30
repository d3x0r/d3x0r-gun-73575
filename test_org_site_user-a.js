
var Gun = require( "../gun.js" );
// without file.js maps do not fire.
require( "../lib/file.js" );
var gun = new Gun();

var db = gun.get( "db" );

db.get( "orgDef" ).map().on( addOrg );
db.get( "siteDef").map().on( addSite );


var orgs = db.get( "orgDef" );
var org1 = db.get( "orgDef:1" );
org1.put( { name: "Org1", id:1 } );
orgs.path( 1 ).put( org1 );

var sites = db.get( "siteDef" );
var site = db.get( "siteDef:1" );
site.put( {name:"site1", id:1 } );
org1.path("sites").path(1).put( site );
sites.path(1).put( site );


function addOrg( v, f ) {
	console.log( "Added org:", f, v );
}

function addSite( v, f ) {
	console.log( "Added site:", f, v );
}

