const fs = require("fs");

const recursiveDir = (path) => {
  console.log(path);

  fs.readdirSync(path).forEach((entry) => {
    if (entry.startsWith(".")) {
      // skip hidden files and directories
      return;
    }

    const full = `${path}/${entry}`;
    const stats = fs.lstatSync(full);

    if (stats.isSymbolicLink()) {
      console.log("L ", full); // symlink, don't follow
    } else if (stats.isDirectory()) {
      console.log("D ", full); // directory
      recursiveDir(full);      // recursive call
    } else {
      console.log("  ", full); // file
    }
  });
};