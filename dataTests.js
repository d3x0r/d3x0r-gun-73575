

var Gun = require( "../" );
var gun = new Gun();
var db = gun.get( "db" );

function showData( header, val, field, xxx, yyy ) {
    console.log( header, "got val=", val, " in ", field, " with ", xxx, yyy, " on ", this )
}
function showData1(...args) { showData( "1", ...args) }
function showData2(...args) { showData( "2", ...args) }
function showData3(...args) { showData( "3", ...args) }

//db.map().on( showData1 );
db.map( showData1 );
db.map().map().on( showData2 );
db.map().map().map().on( showData3 );


db.put( "A simple String" );
db.put( 123 );
db.put( "another string" );
db.put( new Date() );
db.put( { property: "value" } )
db.put( { prop2: "another value" } );
db.put( { msg: { hdr: { op: "123" }}});
db.put( "alpha" );
