'use strict';

module.exports = function (sequelize, DataTypes) {
  let hotelRoomModel =  sequelize.define('hotelroominfo', {
    Id: {
      type: DataTypes.STRING(100),
      primaryKey: true,
      allowNull: false
    },
    Name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Address: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    MobileNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    AvailableAmount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RequiredPoints: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LastUpdatedTs: {
      type: DataTypes.Date,
      allowNull: true
    }
  }, {
    tableName: 'hotelroominfo',
    timestamps: false
  });

  return hotelRoomModel;
};
