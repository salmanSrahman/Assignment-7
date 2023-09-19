const app = require("./app");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

app.listen(process.env.RUNNING_PORT, () => {
  console.log("app is listening on port " + process.env.RUNNING_PORT);
});
