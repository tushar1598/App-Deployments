const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./config/mongoose");
const dotenv = require("dotenv");

dotenv.config();

app.use(bodyParser.json());

app.use(
  cors({
    origin: "https://app-deployments-frontend.onrender.com",
    credentials: true,
  })
);

// Serve static files from the Vite build folder
app.use(express.static(path.join(__dirname, "dist")));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/", require("./routes"));

// Serve the Vite `index.html` file for any non-API routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(process.env.port, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Server is running successfully on port:: ${process.env.port}!!`);
});
