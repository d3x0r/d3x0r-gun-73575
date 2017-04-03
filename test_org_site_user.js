const canAddPaths = false

var Gun = require( "../gun.js" );
//Gun.serve = require('../lib/serve.js');
//require( "../lib/nts.js" );
require( "../lib/file.js" );

Gun.on('out', sendGun );

function sendGun( msg ) {
	//console.log( "gun out event : ", msg );
	this.to.next(msg);	
	if( true ) return;
}

var gun = new Gun( {uws:{noServer:true}} );

var db = gun;//.get( "db" );


var orgs = db.get( "orgDef" );
var org1 = db.get( "orgDef:1" );
org1.put( { name: "Org1", id:1 } );
orgs.path( 1 ).put( org1 );

var org2 = db.get( "orgDef:2" );
org2.put( { name: "Org2", id:2 } );
orgs.path( 2 ).put( org2 );


var perms = db.get( "permDef" );
var perm1 = db.get( "permDef:1" );
perm1.put( { name: "Perm1", id:1 } );
perms.path( 1 ).put( perm1 );

var perm2 = db.get( "permDef:2" );
perm2.put( { name: "Perm2", id:2 } );
perms.path( 2 ).put( perm2 );

var sites = db.get( "siteDef" );
var site = db.get( "siteDef:1" );
site.put( {name:"site1", id:1 } );
canAddPaths && org1.path("sites").path(1).put( site );
sites.path(1).put( site );

var user = db.get( "userDef:1" );
user.put( {name:"User1", id:1 } );
site.path( "users" ).path( 1 ).put( user );
user.path("permissions").path(0).put( perm1 );
user.path("permissions").path(1).put( perm2 );

var user = db.get( "userDef:2" );
user.put( {name:"User2", id:2 } );
site.path( "users" ).path( 2 ).put( user );
//user.path("permissions").path(0).put( perm1 );
//user.path("permissions").path(1).put( perm2 );

var user = db.get( "userDef:3" );
user.put( {name:"User3" } );
site.path( "users" ).path( 3 ).put( user );
//user.path("permissions").path(0).put( perm1 );
//user.path("permissions").path(1).put( perm2 );


var site = db.get( "siteDef:2" );
site.put( {name:"site2", id:2 } );
sites.path(2).put( site );
org1.path("sites").path(2).put( site );

var user = db.get( "userDef:4" );
user.put( {name:"User4" } );
//users.path(4).put( user );
site.path( "users" ).path( 4 ).put( user );
user.path("permissions").path(0).put( perm1 );
//user.path("permissions").path(1).put( perm2 );


var site = db.get( "siteDef:3" );
site.put( {name:"site3", id:3 } );
sites.path(2).put( site );
org2.path("sites").path(3).put( site );

var user = db.get( "userDef:5" );
user.put( {name:"User5" } );
//users.path(4).put( user );
site.path( "users" ).path( 5 ).put( user );
user.path("permissions").path(0).put( perm1 );
//user.path("permissions").path(1).put( perm2 );


if(0){
db.get( "orgDef" ).map().on( addOrg );
db.get( "siteDef").map().on( addSite );


function addOrg( v, f ) {
	console.log( "Added org:", f, v );
}

function addSite( v, f ) {
	console.log( "Added site:", f, v );
	this.path( "users").map().on( function( v2,f) { return addUser( this, v, v2, f ) } )
}

function adduser( _this, site, v, f ) { 
	console.log( "Add user:", f, v, "to", site );
}

}