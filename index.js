const dotenv = require("dotenv");

dotenv.config();

const express = require("express");

const app = express();

app.get("/hello", (req, res, next) => {
  res
    .status(200)
    .json({ success: true, data: { message: "Hello From /hello" } });
});

app.get("/info", (req, res, next) => {
  res
    .status(200)
    .json({ success: true, data: { message: "Hello From /info" } });
});

const PORT = process.env.PORT ?? 5001;

app.listen(PORT, () => console.log(`we are listening to port ${PORT}`));
