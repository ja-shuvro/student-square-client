const express = require("express");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const session = require("express-session");
const allRouter = require("./router/router");

// Set trust proxy
app.set("trust proxy", true);

// Set view engine and views directory
app.set("view engine", "ejs");
app.set("views", "views");

// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
  })
);

app.use("/", allRouter);

// Start the server
const PORT = process.env.PORT || 1919;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
