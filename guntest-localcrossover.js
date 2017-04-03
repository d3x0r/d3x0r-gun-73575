var Gun = require( "../" );

var a = Gun( { file: "a.json" } );
var b = Gun( { file : "b.json" } );
var c = Gun( { file : "c.json" } );
var d = null;
Gun.on('out', function(msg){
	this.to.next(msg)
	var onGun = msg.gun.back(-1);
	if( onGun === a ) {
		console.log( "a sends to b...." );
		b.on( "in", msg );
	}
	else if( onGun === b ) {
		console.log( "b sends to a...." );
		a.on( "in", msg );
		if(d) {
			console.log( "b can also send to d...." );
			 d.on( "in", msg );
		}
	}
	else if( onGun === c ) {
		console.log( "c sends to noone..." );
	}
	else if( onGun === d ) {
		console.log( "d sends to b...." );
		b.on( "in", msg );
	}

	else   console.log( ["to where?...", JSON.stringify(onGun), "\n Message:", JSON.stringify(msg)].join(" ") );
})

var ab = a.get( "key" );
var bb = b.get( "key" );
ab.map( (val,field)=>{console.log("a key got val:", field, val ) } );
bb.map( (val,field)=>{console.log("b key got val:", field, val ) } );
bb.put( { msg: "hello"} );

setTimeout( ()=>{
	console.log( "tick" );
	var cb = c.get( "key" );
	cb.map( (val,field)=>{console.log("c key got val:", field, val ) } );
	bb.map( (val,field)=>{console.log("b2 key got val:", field, val ) } );
	
	d = Gun( { file : "d.json" } );
	var db = d.get("key");
	db.map( (val,field)=>{console.log("d key got val:", field, val )
		setTimeout( ()=>{ ab.put( { msg: "updated from a" } ) } );
	 } );
	
}, 1000 );