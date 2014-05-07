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
define("booking_error_try_again","Booking Error Please Try Again")