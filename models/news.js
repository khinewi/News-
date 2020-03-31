const db = require("../models");

// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcryptjs");
// Creating our User model
module.exports = function(sequelize, DataTypes) {
    var News = sequelize.define("News", {
        // The email cannot be null, and must be a proper email before creation
        Topic: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        }

    });

    News.associate = function(models) {
        News.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return News;
};