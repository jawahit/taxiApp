/**
 * New node file
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BookingSchema = new Schema({
	
	pickup :{
		type:String,
		default:''
	},
	dropoff:{
		type:String,
		default:''
	},
	pickupdatetime:{
		type:String,
		default:'',
		trim: true
	},
	passengers:{
		type:Number,
		default:0
	},
	name:{
		type:String,
		default:'',
		trim: true
	},
	emailid:{
		type:String,
		default:'',
		trim: true
	},phone:{
		type:Number,
		default:0
	}
	
	
});

BookingSchema.path('pickup').validate(function(pickup) {
    // If you are authenticating by any of the oauth strategies, don't validate.
   // if (!this.provider) return true;
    return (typeof pickup === 'string' && pickup.length > 0);
}, 'PickupAddress cannot be blank');

BookingSchema.path('dropoff').validate(function(dropoff) {
    // If you are authenticating by any of the oauth strategies, don't validate.
   // if (!this.provider) return true;
    return (typeof dropoff === 'string' && dropoff.length > 0);
}, 'dropoffAddress cannot be blank');

BookingSchema.path('pickupdatetime').validate(function(pickupdatetime) {
    // If you are authenticating by any of the oauth strategies, don't validate.
   // if (!this.provider) return true;
    return (typeof pickupdatetime === 'string' && pickupdatetime.length > 0);
}, 'pickupdatetime cannot be blank');

BookingSchema.path('name').validate(function(name) {
    // If you are authenticating by any of the oauth strategies, don't validate.
   // if (!this.provider) return true;
    return (typeof name === 'string' && name.length > 0);
}, 'name cannot be blank');

BookingSchema.path('emailid').validate(function(emailid) {
    // If you are authenticating by any of the oauth strategies, don't validate.
   // if (!this.provider) return true;
    return (typeof emailid === 'string' && emailid.length > 0);
}, 'emailid cannot be blank');

BookingSchema.path('phone').validate(function(phone) {
    // If you are authenticating by any of the oauth strategies, don't validate.
   // if (!this.provider) return true;
    return (typeof phone === 'number' && phone != 0);
}, 'phone cannot be blank');

mongoose.model('Booking', BookingSchema);

