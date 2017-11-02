/*
//var Gun = require( "gun" );
//require( "gun/lib/not.js" );

var Gun = require( "../gun" );
require( "../lib/not.js" );
*/
var gun = new Gun();
var app = gun.get('app');

//deleteDino('dino/velociraptor');
initDino('dino/velociraptor');


app.get('dino/velociraptor').get('statistics').map().val(function(value,field) {
  console.log('value:', field, '=', value);
});


app.get('dino/velociraptor').get('statistics').val(function(value,field) {
  console.log('value:', field, '=', value);
});

function deleteDino (name) {
    console.log( "delete called." );
  app.get(name).put(null);
}

function initDino (name) {
  app.get(name).not(function () {
    console.log( "not called." );
    app.get(name).put({
    	statistics: {
      	force: 5,
        speed: 17,
        intelligence: 23
      }
    });
  });
}
