const express = require("express");
const path = require("path");

const app = express();

// Serve everything inside /public
app.use(express.static(path.join(__dirname, "public")));

if (require.main === module) {
  app.listen(3000, () => {
    console.log("Running locally on port 3000");
  });
}

module.exports = app;
