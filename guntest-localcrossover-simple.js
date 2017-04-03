
var allowSend = false;
var Gun = Gun || require( "../gun.js" );
//var Gun = Gun || require( "../" );
function mtos( msg ) { return Gun.text.ify( msg ); } // message-to-string
Gun.on('out', function(msg){
	this.to.next(msg)
	//console.log( "msg: ", typeof msg, msg );
	var onGun = msg.gun.back(-1);
	if( onGun === b ) {
		if(d) {
			//console.log( "b can send to d....", mtos(msg) );
			 d.on( "in", msg );
		}
	} else if( onGun === d ) {
		//console.log( "d sends to b....", mtos(msg) );
		if( allowSend ) 
		b.on( "in",msg );
	}
})


var b = Gun( { file : "b.json" } );
var d = null;


var bb = b.get( "key" );
bb.put( { msg: "hello"} );
bb.map().on( (val,field)=>{console.log("b key got val:", field, val ) } );


	
d = Gun( { file : "d.json" } );
var db = d.get("key");
db.map( (val,field)=>{console.log("d key got val:", field, val ) } );


		var s = { site_id : 23 };

function putSite() {
		var siteDef = d.get( "siteDef" );
		var gunSite = d.get( sitekey = "siteDef:"+s.site_id );
		var ot = { id:s.site_id,org_id:1,name:"Site1", address:"Address1" };
		gunSite.put( ot );
		siteDef.path( s.site_id ).put( gunSite );
}
setTimeout( ()=>{
	putSite();
		s.site_id++;
	allowSend = true;
   db.put( { msg: "hello Again"} );
}, 100 );
setTimeout( ()=>{
	b.get( "siteDef").map().on( (val,field)=>{console.log("b Sitedef got val:", field, val ) } );
	putSite();
		s.site_id++;
}, 300 );
setTimeout( ()=>{
	putSite();
		s.site_id++;
}, 400 );
setTimeout( ()=>{
	putSite();
		s.site_id++;
}, 200 );

setTimeout( ()=>{
   bb.put( { msg: "hello final"} );
}, 200 );
