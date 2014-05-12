function define(name, value) {
    Object.defineProperty(exports, name, {
        value: value,
        enumerable: true
    });
}

/* Generic Status messages */
define("success_status", "Success");
define("error_status", "Failure");

/* User service constant values */
define("booking_create_success", "Reservation Done");

define("invalid_mail_id", "Can't send mail - invalid email id");
define("booking_confirmation_subject","Your Booking Confirmation");
define("booking_confirmation","Your Booking Confirmed Check your Inbox");
define("booking_error_try_again","Booking Error Please Try Again");
define("contact_confirmation","You have contacted us Check your Inbox for Confirmation");
define("contact_error_try_again","Contact Error Please Try Again");
define("contact_confirmation_subject","Thank You for Contacting us");
define("booking_details_empty","Empty Booking Details");
define("contact_details_empty","Empty Contact Details");