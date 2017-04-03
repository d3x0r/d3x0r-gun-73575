
var Gun = require( "../gun.js" );
// without file.js maps do not fire.
require( "../lib/file.js" );
var gun = new Gun();


// db extra path cuases this to break.
var db = gun.get( "db" );

var orgs = db.get( "orgDef" );
var org1 = db.get( "orgDef:1" );

// This version, orgDef:1 doesn't get replaced, but the site is not related either.
//org1.put( { name: "Org1", id:1, sites:null } );

// This version, orgDef:1 gets replaced with 'sites'
org1.put( { name: "Org1", id:1 } );

orgs.path( 1 ).put( org1 );

var site = db.get( "siteDef:1" );
site.put( {name:"site1", id:1 } );

// this line  causes 'orgDef1:' to equal { sites : { 1 : ...} }
// and the other   OrgDef : { 1 : { id: id, name: "Org1" } } is still the first part 
//org1.path("sites").path(1).put( site );

//if( 0 ) {
  // a third alternative 
  org1.path('sites.1').put({'#':'siteDef:1'})
//}

//org1.put( { sites: { 1 : site } } );
//var sitePath = org1.put( { sites: { 1 : site1 } }


var sites = db.get( "siteDef" );
sites.path(1).put( site );



db.get( "orgDef" ).map().on( addOrg );
db.get( "siteDef").map().on( addSite );

function addOrg( v, f ) {
	console.log( "Added org:", f, v );
}

function addSite( v, f ) {
	console.log( "Added site:", f, v );
}

