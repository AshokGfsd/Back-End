const { error } = require("console");
const fs = require("fs");

fs.mkdir("storage-file", (error) => {
  if (error) {
    console.error("Folder created error", error);
  } else {
    console.log("Folder created");
  }
});
