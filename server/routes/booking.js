/**
 * Router for Booking
 */

var booking = require('../controllers/booking');

module.exports = function(app) {

	app.post('/booking', booking.create);
	
};

