const spawn = require("cross-spawn");

spawn.sync("yarn", ["--cwd", "~/../client/", "start"], {
  stdio: "inherit",
});
