const fs = require("fs");
const path = require("path");

function recursiveDir(dirPath) {
  console.log(dirPath); // Print current directory

  const entries = fs.readdirSync(dirPath);

  entries.forEach(entry => {
    if (entry.startsWith(".")) {
      return; // Skip hidden files/directories
    }

    const fullPath = path.join(dirPath, entry);
    const stats = fs.lstatSync(fullPath);

    if (stats.isSymbolicLink()) {
      console.log("L ", fullPath); // Symbolic link (not followed)
    } else if (stats.isDirectory()) {
      console.log("D ", fullPath); // Directory
      recursiveDir(fullPath);      // Recursive call
    } else {
      console.log("  ", fullPath); // Regular file
    }
  });
}
recursiveDir("./example-folder");
