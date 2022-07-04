require("dotenv").config();
require("make-promises-safe");

const container = require("./infrastructure/config/container")();
const server = require("./infrastructure/webserver/server")(container.cradle);

const cb = (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    } else {
      console.log("Running on " + 3000);
    }
  };

server.listen(3000, cb);