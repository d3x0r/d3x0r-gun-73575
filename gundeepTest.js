
var Gun = require( "../" );
var gun = new Gun();

var doc = gun.get( "doc" );
var j=gun.get( "John" );
j.put( {name: "Johnny" } );
var k=gun.get( "Ken" );
k.put( {name: "Kenneth" } );
var m=gun.get( "Mary" );
m.put( {name: "Marissa" } );

j.path( "wife" ).put( m );
k.path( "brother" ).put( j );
m.path( "brother-in-law" ).put( k );
doc.path( "Starring Actor" ).put( j );

doc.map( dump1 );

function dump1( val, field ) {
	console.log( "only get ...", field, val );
}

var soul;
setTimeout( ()=>{
	console.log( "add offspring to mary..." );
         soul = gun.get( "Mary" ).path( "offspring" ) ;
	soul.put( { name: "Johnny Jr" } )
j.path( "son" ).put( soul );
}, 1000 ); 

setTimeout( ()=>{
	console.log( "change offspring name..." );
       soul.put( { name: "Johnny The First" } )
}, 2000 ); 
