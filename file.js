
const fs = require("fs");

fs.unlink("hello.txt", "utf-8", (error) => {
  if (error) {
    console.error("file deleting error", error);
  } else {
    console.log("File was deleted");
  }
});
