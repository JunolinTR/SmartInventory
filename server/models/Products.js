const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define("Products",{
        name : {
            type : DataTypes.STRING,
            allowNull : false
        },

        category : {
            type : DataTypes.STRING,
        },

        stock : {
            type : DataTypes.INTEGER,
            allowNull : false
        },

        price : {
            type : DataTypes.DOUBLE,
            allowNull : false
        }

    });

    return Products;
}