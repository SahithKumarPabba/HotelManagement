'use strict';

module.exports = function (sequelize, DataTypes) {
  let userInfoModel =  sequelize.define('userinfo', {
    Id: {
      type: DataTypes.STRING(100),
      primaryKey: true,
      allowNull: false
    },
    Name: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    MobileNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    AccountCreatedDate: {
      type: DataTypes.Date,
      allowNull: true
    },
    LastLoginDate: {
      type: DataTypes.Date,
      allowNull: true
    },
    Role: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    tableName: 'userinfo',
    timestamps: false
  });

  return userInfoModel;
};
