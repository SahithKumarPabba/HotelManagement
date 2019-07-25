'use strict';

module.exports = function (sequelize, DataTypes) {
  let bookingModel =  sequelize.define('bookinginfo', {
    BookingId: {
      type: DataTypes.STRING(100),
      primaryKey: true,
      allowNull: false
    },
    UserId: {
      type: DataTypes.STRING(100),
      allowNull: false,
      references: {
        model: 'userinfo',
        key: 'Id'
      }
    },
    RoomId: {
      type: DataTypes.STRING(100),
      allowNull: false,
      references: {
        model: 'hotelroominfo',
        key: 'Id'
      }
    },
    BookingDate: {
      type: DataTypes.Date,
      allowNull: false
    }
  }, {
    tableName: 'bookinginfo',
    timestamps: false
  });

  return bookingModel;
};
