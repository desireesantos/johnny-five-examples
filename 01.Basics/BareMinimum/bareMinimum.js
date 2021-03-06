/*
  BareMinimum
 
  This example code is in the public domain.
 */

var five = require( 'johnny-five' );
var board = new five.Board();

// The board's pins will not be accessible until
// the board has reported that it is ready
board.on( 'ready', function() {

  // put your setup code here, to run once:

  // board.loop is the closest analog to void loop()
  // However, Johnny-Five is evented with callbacks,
  // which are generally a better solution
	board.loop( 1000, function() {

		// put your main code here, to run repeatedly:

	});

});