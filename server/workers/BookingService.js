/**Service for Booking 
 * 
 */

var constant = require('../config/Constant'),
    randomUtil = require('../utils/RandomUtil'),
    nodemailer = require("nodemailer"),
    mail = require("nodemailer").mail,
    config = require('../config/config');

exports.saveBooking = function(bookingDetails,callBack){
	
	var idLength = '7';
    var bookingId = 'ACC' + randomUtil.getRandomCode(idLength);
    var bookingConfirmationResponse ={};
    if(null!= bookingId && null!=bookingDetails){
    	sendmail(bookingId,bookingDetails,function(response){
    		callBack(response);
    	});
    }else{
    	bookingConfirmationResponse ={
				"bookingConfirmationResponse" :{
					"status" :constant.error_status,
					"message": constant.booking_error_try_again,
					"bookingId":null
				}					
			};
    	callBack(bookingConfirmationResponse);
    }
    
};

var sendmail = function(bookingId,bookingDetails,callback) {

var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: config.smtpdetails.fromaddress,
        pass: config.smtpdetails.pass
    }
});

//setup e-mail data with unicode symbols
var mailOptions = {
    from: config.smtpdetails.fromaddress, // sender address
    to: bookingDetails.emailid+","+config.smtpdetails.fromaddress, // list of receivers
    subject: constant.booking_confirmation_subject, // Subject line
    text: "Booking Confirmed", // plaintext body
    html: "<b>Booking Confirmed + </b>"+bookingDetails.name+"Booking id:"+bookingId // html body
}

//send mail with defined transport object
	smtpTransport.sendMail(mailOptions, function(error, response){
		var bookingConfirmationResponse ={};
		if(error){
			bookingConfirmationResponse ={
				"bookingConfirmationResponse" :{
					"status" :constant.error_status,
					"message": constant.invalid_mail_id,
	                "error": error.message
				}	
					
			};
		}else{
			bookingConfirmationResponse ={
					"bookingConfirmationResponse" :{
						"status" :constant.success_status,
						"message": constant.booking_confirmation,
						"bookingId": bookingId
					}	
						
			};
		}
		 smtpTransport.close();
	     callback(bookingConfirmationResponse);
	});

}

