const express = require("express");
const app = express();

require("dotenv").config();

app.use(express.json());

const appRouter = require("./routes/app.router.js");

app.use("/api/v1", appRouter);

app.listen(process.env.PORT, () =>
  console.log("Server is running on port 5000")
);
