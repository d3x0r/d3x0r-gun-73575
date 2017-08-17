
var Gun = require( '../gun' );
require( '../lib/not' );

var db = new Gun();

var infoDb;

( infoDb = db.get( "info" ) ).not( noValues ).val( values );

function noValues() {
	console.log( "no info; load default" );
	setTimeout( ()=>{
	        infoDb.put( { data: { someValue:0 }, count: 3 } );
	}, 250 ) ;
	console.log( "after put some data" );
}

function values( val ) {
	console.log( "val is:", val );
}

