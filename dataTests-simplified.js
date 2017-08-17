var Gun = require( "../" );
var gun = new Gun( { ws: { noServer : true } });
var db0 = gun.get( "dbRoot" );
var db = db0.get( "dbDoc" );
db.put( {a:"A simple String"} );
db0.put( { dbDoc:null} );
//var db = db0.get( "dbDoc" );

db.put( {a:"Restore A simple String"} );
