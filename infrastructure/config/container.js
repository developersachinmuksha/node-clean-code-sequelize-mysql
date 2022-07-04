const { createContainer } = require("awilix");
const resolveDB = require("./database");

const container = createContainer();

module.exports = () => {
  container.loadModules([
    "ports/**/*.js",
    "application/**/*.js",
    "domain/**/*.js",
    "infrastructure/utils/**/*.js"
  ]);

  resolveDB(container);
  return container;
};
