

var Gun = require( '../' );

var gunOpts = {peers:["ws://localhost:7734/gun"], file:'notnull.services' };
var gun = Gun( gunOpts );

	var svc = gun.get( 'Services' ).path( "registry" );

	svc.map( function(val,field){
        	if( typeof( val ) == 'object' ) {
			console.log( "(side2 services.registry) client map received his own service request", val, field  );
        	        if( !("ServiceID" in val) )
	        	        this.put( { ServiceID:1234 } );
                } else {
                	console.log( "communication failure." );
                }
		//this.put( { serviceID: "1234" } );
	})
	// shouldn't have to do a put... just here for later testing... doesn't help.

	var msg = [{},{},{}];
        msg[0][Gun.text.random()] = { name: "Chat" } ;

	setTimeout( ()=>{ svc.put( msg[0] ); }, 1000 );

        msg[1][Gun.text.random()] = { name: "Firewall" } ;
        
	setTimeout( ()=>{ svc.put( msg[1] ); }, 1500 );
        
        msg[2][Gun.text.random()] = { name: "OtherThing" } ;
        
	setTimeout( ()=>{ svc.put( msg[2] ); }, 2000 );

