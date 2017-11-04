// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
var userSchema = new mongoose.Schema;
userSchema.add({
	
		name: { type: String },
		email: { type: String },
		username: { type: String },
		password: { type: String },
		phone_number: { type: Number },
		user_type: { 
			type: String,
			Enum: ["Landlord", "Tenant"]
		}
    			
    });

module.exports = mongoose.model('User', userSchema);