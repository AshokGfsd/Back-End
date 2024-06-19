const { error } = require("console");
const fs = require("fs");

fs.readFile("hello.txt", "utf-8", (error, data) => {
  if (error) {
    console.error("file writing error", error);
  } else {
    console.log(data);
  }
});
