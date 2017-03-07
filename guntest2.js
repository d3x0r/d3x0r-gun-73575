
var Gun = require( "../" );

var a = Gun( { file: "a.json" } );

a.on( "
var b = Gun( { file : "b.json" } );
var c = Gun( { file : "c.json" } );
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
}, 1000 );

