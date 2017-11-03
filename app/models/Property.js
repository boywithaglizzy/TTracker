var mongoose = require('mongoose');
var user = require('./Users.js');
var rent = require('./Rent.js');
var appliance = require('./Appliance.js');

var propertySchema = new mongoose.Schema;
propertySchema.add({
    name: String,
    address: String,
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: user
    }],
    rent_payments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: rent
    }], 
    appliances: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: appliance
    }]
});

module.exports = mongoose.model('Property', propertySchema);
/*
{"name":"Cherry st. unit", "address":"123 Cherry St.", "users":[{"name":"Keri", "email":"keri123@gmail.com", "username":"k23", "password":"apples", "phone_number":3108887777, "user_type":"Landlord"}], "rent_payments":[{"name":"rent", "date":"02142018", "tenant_status":"Sent","landlord_status":"Received"}], "appliances": [{"name":"toilet","brand":"sears","image":"lol","status":"Good"}]}*/
