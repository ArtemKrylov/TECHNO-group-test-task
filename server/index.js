const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();

const corsOptions = {
  origin: "https://techno-group-test-task.vercel.app",
};
app.use(cors(corsOptions));

app.use(express.json());

const appRouter = require("./routes/app.router.js");

app.use("/api/v1", appRouter);

app.listen(process.env.PORT, () =>
  console.log("Server is running on port 5000")
);
