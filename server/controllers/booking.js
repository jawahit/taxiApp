/*Controller for Booking
 * 
 */

var _ = require('lodash'),
    bookingService = require('../workers/BookingService');


exports.createBooking = function(req,res){
	var booking = req.body;
	console.log("date & time :"+booking.pickupdatetime);
	bookingService.saveBooking(booking,function(response){
		res.jsonp(response);
	});
};

exports.createContact = function(req,res){
	var contact = req.body;
	bookingService.saveContact(contact,function(response){
		res.jsonp(response);
	});
};