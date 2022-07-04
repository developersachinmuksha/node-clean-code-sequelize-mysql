const { asFunction, asValue } = require("awilix");

const mySQLDB = (container) => {
  // const UserRepository = require("../repositories/UserRepository");
  // const UserRepositoryConverter = require("../repositories/UserRepositoryConverter");

  // Load Database and Schemas
  container.loadModules([
    "infrastructure/database/**/*.js",
    "infrastructure/repositories/**/*.js",
  ]);

  // Register individual repos
  // container.register({
  //   UserRepository: asFunction(UserRepository),
  //   UserRepositoryConverter: asFunction(UserRepositoryConverter),
  // });
};

const resolveDB = (container) => {
  mySQLDB(container);
  container.register({
    db: asValue(container.resolve("conntecToDB"))
  });
};

module.exports = resolveDB;
