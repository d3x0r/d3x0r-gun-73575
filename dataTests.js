

var Gun = require( "../" );
var gun = new Gun( { ws: { noServer : true } });
var db0 = gun.get( "dbRoot" );
var db = db0.get( "dbDoc" );

function showData( header, val, field, xxx, yyy ) {
    console.log( header, "got val=", val, " in ", field );//, " with ", xxx, yyy, " on ", this )
}
function showData1(...args) { showData( "1", ...args) }
function showData2(...args) { showData( "2", ...args) }
function showData3(...args) { showData( "3", ...args) }

//db.map().on( showData1 );
db.map( showData1 );
db.map().map().on( showData2 );
db.map().map().map().on( showData3 );


db.put( {a:"A simple String"} );
db.put( {b:123} );
db.put( {c:"another string"} );
// passing a new Date() is an invalid value to gun.
db.put( {d:(new Date()).toISOString() } );
db.put( { property: "value" } )
db.put( { prop2: "another value" } );
db.put( { msg: { hdr: { op: "123" }}});
db0.put( { dbDoc:null} );
var db = db0.get( "dbDoc" );

db.put( {a:"Restore A simple String"} );
db.put( {b:321} );
db.put( {c:"Restore another string"} );
