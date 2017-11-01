var mongoose = require('mongoose');

var propertySchema = new mongoose.Schema({
  "type": "object",
  "name": "Property",
  "properties": {
    
    "name": { "type": "string" },
    "code": { "type": "integer" },
    
    "address": { 
		"type": "object" ,
		"properties": {
		    "street_address": { "type": "string" },
		    "city": { "type": "string" },
		    "zip_code": { "type": "string" }
		}
	},
    
    "users": [
    	{
    		"type": "object",
    		"properties": {
    			"name": { "type": "string" },
    			"email": { "type": "string" },
    			"username": { "type": "string" },
    			"password": { "type": "string" },
    			"phone_number": { "type": "integer" },
    			"user_type": { 
    							"type": "string",
    							"enum": ["Landlord", "Tenant"]
    						 },
    			
    		},
    		"required": ["name", "email", "username", "password"]
        }
    ],

    "rent_payments": [
    	{
    		"type": "object",
    		"properties": {
    			"tenant_status": {  
    								"type": "string",
    								"enum": ["Sent", "Not Sent"]
    							 },
    			"landlord_status": { 
    								  "type": "string",
    								  "enum": ["Received", "Not Received"]
    							   },
    			"date": { "type": "integer" }
    			
    		},
    		"required": ["tenant_status", "landlord_status"]
        }
    ],

    "appliances": [
    	{
    		"type": "object",
    		"properties": {
    			"name": { "type": "string" },
    			"brand": { "type": "string" },
    			"status": { "type": "string",
    						"enum": ["Needs Repair", "Good"]
    					  },
    			"image": { "type": "string" }
    			
    		},
    		"required": ["name", "status"]
        }
    ]
  
  },

  "required": ["code", "users", "rent_payments", "appliances"]
});

module.exports = mongoose.model('Property', propertySchema);

