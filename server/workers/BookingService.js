/**Service for Booking 
 * 
 */

var constant = require('../config/Constant'),
    randomUtil = require('../utils/RandomUtil'),
    utilMailOptions = require('../utils/MailOptions'),
    nodemailer = require("nodemailer"),
    mail = require("nodemailer").mail,
    config = require('../config/config');

exports.saveBooking = function(bookingDetails,callBack){
	
	var idLength = '7';
    var bookingId = 'BK' + randomUtil.getRandomCode(idLength);
    var bookingConfirmationResponse ={};
    if(null!= bookingId && null!=bookingDetails){
    	sendmail(createTransport(),bookingMailOptions(bookingDetails,bookingId),bookingId,constant.booking_confirmation,function(response){
    		bookingConfirmationResponse ={
    				"bookingConfirmationResponse" :{
    					"status" :response.confirmationResponse.status,
    					"message": response.confirmationResponse.message,
    					"bookingId":response.confirmationResponse.id,
    					"error":response.confirmationResponse.error
    				}					
    			};
    		callBack(bookingConfirmationResponse);
    	});
    	
    }else{
    	bookingConfirmationResponse ={
				"bookingConfirmationResponse" :{
					"status" :constant.error_status,
					"message": constant.booking_error_try_again,
					"bookingId":null,
					"error":constant.booking_details_empty
				}					
			};
    	callBack(bookingConfirmationResponse);
    }
    
};

exports.saveContact = function(contactDetails,callBack){
	
	var idLength = '7';
    var contactId = 'CT' + randomUtil.getRandomCode(idLength);
    var contactConfirmationResponse ={};
    if(null!= contactId && null!=contactDetails){
    	sendmail(createTransport(),contactMailOptions(contactDetails,contactId),contactId,constant.contact_confirmation,function(response){
    		contactConfirmationResponse ={
    				"contactConfirmationResponse" :{
    					"status" :response.confirmationResponse.status,
    					"message": response.confirmationResponse.message,
    					"contactId":response.confirmationResponse.id,
    					"error":response.confirmationResponse.error
    				}					
    			};
    		callBack(contactConfirmationResponse);
    	});
    }else{
    	contactConfirmationResponse ={
				"contactConfirmationResponse" :{
					"status" :constant.error_status,
					"message": constant.contact_error_try_again,
					"contactId":null,
					"error":constant.contact_details_empty
				}					
			};
    	callBack(contactConfirmationResponse);
    }
    
};


var createTransport = function(){
	var transport =nodemailer.createTransport("SMTP",{
	    service: "Gmail",
	    auth: {
	        user: config.smtpdetails.fromaddress,
	        pass: config.smtpdetails.pass
	    }
	});
	
	return transport;
}

var bookingMailOptions = function(bookingDetails,bookingId){
	
	var mailOptions = {
		    from: config.smtpdetails.fromaddress, // sender address
		    to: bookingDetails.emailid+","+config.smtpdetails.fromaddress, // list of receivers
		    subject: constant.booking_confirmation_subject, // Subject line
		    text: "Booking Confirmed", // plaintext body
		    html: utilMailOptions.getConfirmBooking(bookingDetails,bookingId) // html body
		};
	return mailOptions;
};


var contactMailOptions = function(contactDetails,contactId){
	
	var mailOptions = {
		    from: config.smtpdetails.fromaddress, // sender address
		    to: contactDetails.emailid+","+config.smtpdetails.fromaddress, // list of receivers
		    subject: constant.contact_confirmation_subject, // Subject line
		    text: "Contact Confirmed", // plaintext body
		    html: "<b>Contact Confirmed + </b>"+contactDetails.name+"Reference Id:"+contactId // html body
		};
	return mailOptions;
};

var sendmail = function(smtpTransport,mailOptions,id,confirmationMsg,callback) {
//send mail with defined transport object
	smtpTransport.sendMail(mailOptions, function(error, response){
		var confirmationResponse ={};
		if(error){
			confirmationResponse ={
				"confirmationResponse" :{
					"status" :constant.error_status,
					"message": constant.invalid_mail_id,
	                "error": error.message
				}	
					
			};
		}else{
			confirmationResponse ={
					"confirmationResponse" :{
						"status" :constant.success_status,
						"message": confirmationMsg,
						"id": id,
						"error":null
					}	
						
			};
		}
		 smtpTransport.close();
	     callback(confirmationResponse);
	});

};

