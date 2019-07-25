'use strict';

module.exports = function (sequelize, DataTypes) {
  let bonusPointsModel =  sequelize.define('bonuspoints', {
    Id: {
      type: DataTypes.STRING(100),
      primaryKey: true,
      allowNull: false,
      references: {
        model: 'userinfo',
        key: 'Id'
      }
    },
    PointsAccumulated: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PointsLeft: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PointsConsumed: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LastUpdatedTs: {
      type: DataTypes.Date,
      allowNull: true
    }
  }, {
    tableName: 'bonuspoints',
    timestamps: false
  });

  return bonusPointsModel;
};
