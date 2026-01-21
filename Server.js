const express = require("express");
const path = require("path");

const app = express();

// Serve static files from /public
app.use(express.static(path.join(__dirname, "public")));

// Optional root fallback (good practice)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

//  Only listen locally, NOT on Vercel
if (require.main === module) {
  const port = 3000;
  app.listen(port, () => {
    console.log(`Server running locally at http://localhost:${port}`);
  });
}

module.exports = app;
