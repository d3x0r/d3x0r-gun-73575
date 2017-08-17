var Gun = require( "../" );

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
		console.log( "b also send to d...." );
		d.on( "in", msg );
	}
	else if( onGun === c ) {
		console.log( "c sends to b..." );
		b.on( "in", msg );
	}
	else if( onGun === d ) {
		console.log( "d sends to b...." );
		b.on( "in", msg );
	}

	else   console.log( ["to where?...", JSON.stringify(onGun), "\n Message:", JSON.stringify(msg)].join(" ") );
})

var a = Gun( { file: "a.json" } );
var b = Gun( { file : "b.json" } );
var c = Gun( { file : "c.json" } );
var d = Gun( { file : "d.json" } );

var ab = a.get( "key" );

var bb1 = b.get( "key" );
var bb2 = b.get( "key2" );

var cb = c.get( "key2" );

var db1 = d.get( "key" );
var db2 = d.get( "key2" );


ab.map( (val,field)=>{console.log("a key got val:", field, val ) } );
bb1.map( (val,field)=>{console.log("b1(a) key got val:", field, val ) } );
bb2.map( (val,field)=>{console.log("b2(c) key got val:", field, val ) } );
cb.map( (val,field)=>{console.log("c key got val:", field, val ) } );
db1.map( (val,field)=>{console.log("d1 key got val:", field, val ) } );
db2.map( (val,field)=>{console.log("d2 key got val:", field, val ) } );

ab.put( { msg: "hello Mesh1"} );
bb2.put( { msg: "hello Hesh2" } );

setTimeout( ()=>{
	console.log( "tick" );
	
	ab.put( { msg: "gamestate changed..." } );
	cb.put( { msg: "remote sale ticked" } )
}, 100 );
