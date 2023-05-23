const express = require("express");
const app = express();

app.get("/shops", (res, rej) => {
  res.json({ shops: ["shop1", "shop2", "shop3", "shop4", "shop5"] });
});

app.listen(5000, () => {
  console.log("server started on port 5000");
});
