var Gun = require( "../" );
function mtos( msg ) { return Gun.text.ify( msg ); } // message-to-string
Gun.on('out', function(msg){
	//console.log( "msg: ", typeof msg, msg );

	var onGun = msg.gun.back(-1);
	if( onGun === b ) {
		if(d) {
			console.log( "b can send to d....", mtos(msg) );
			 d.on( "in", msg );
		}
	} else if( onGun === d ) {
		console.log( "d sends to b....", mtos(msg) );
		b.on( "in",msg );
	}
	this.to.next(msg)
})


var b = Gun( { file : "b.json" } );
var d = null;


var bb = b.get( "key" );
bb.put( { msg: "hello"} );
	
d = Gun( { file : "d.json" } );
var db = d.get("key");
db.map( (val,field)=>{console.log("d key got val:", field, val ) } );