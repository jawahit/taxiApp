/*Controller for Booking
 * 
 */

var _ = require('lodash'),
    bookingService = require('../workers/BookingService');


exports.create = function(req,res){
	var booking = req.body;
	bookingService.saveBooking(booking,function(response){
		res.jsonp(response);
	});
};