'use strict';
module.exports = (sequelize, DataTypes) => {
  var Rent = sequelize.define('Rent', {
    id: DataTypes.NUMBER,
    date: DataTypes.DATE,
    landlord_status: DataTypes.STRING,
    tenant_status: DataTypes.STRING,
    property_id: DataTypes.NUMBER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Rent;
};