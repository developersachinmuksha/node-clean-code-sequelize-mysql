const { RESOLVER, Lifetime } = require("awilix");
const Sequelize = require("sequelize");

const database = () => {
  const sequelize = new Sequelize("test", "root", "", {
    host: "localhost",
    dialect: "mysql",
  });

  sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch((error) => {
      console.error("Unable to connect to the database:", error);
    });

  return {sequelize, Sequelize};
};

module.exports = database;
database[RESOLVER] = {
  name: "conntecToDB",
  lifetime: Lifetime.SINGLETON,
};
