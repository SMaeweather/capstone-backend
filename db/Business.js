const { DataTypes } = require("sequelize");

module.exports = (db) => {
  return db.define("business", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    type: DataTypes.STRING,
  });
};
