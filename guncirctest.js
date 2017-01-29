var Gun = require( "../" );

var gun = new Gun();

var org = { org_id: 1, name: "corp", sites : [] } ;
var site = { name: "here", org: org, users:[] };
var user = { name: "bob", site: site };
org.sites.push( site );
site.users.push( user );

var o = org;
	var orgDef = gun.get( "orgDef" );
      	var gunOrg = gun.get( orgkey = "orgDef:1" );
     	gunOrg.put( { id:1,name:"test" } );
      	orgDef.path( 1 ).put( gunOrg );

