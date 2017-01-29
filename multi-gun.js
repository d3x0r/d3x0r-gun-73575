

var Gun = require( '../' );

var gunA = Gun( { file : "A.json" } );
var gunB = Gun( { file : "B.json" });
var gunC = Gun( { file : "C.json" });

gunA.get( "some path A" ).map( (v,f)=>{ console.log( "event on A: ", f, v ) } );
gunB.get( "some path B" ).map( (v,f)=>{ console.log( "event on B: ", f, v ) } );
gunC.get( "some path C" ).map( (v,f)=>{ console.log( "event on C: ", f, v ) } );

gunA.get( "some path A" ).put( { simple:"message" } );
gunB.get( "some path B" ).put( { simple:"message" } );
gunC.get( "some path C" ).put( { simple:"message" } );
