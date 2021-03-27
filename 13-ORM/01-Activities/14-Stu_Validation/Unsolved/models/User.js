const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

// TODO: Add validations to the User model

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      // prevents null values from being entered for the username, email, and password fields.
      allowNull: false,
      isAlphanumeric: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
      },
      // prevents null values from being entered for the username, email, and password fields.
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      // prevents the password from being shorter than eight characters.
      min: 8,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
