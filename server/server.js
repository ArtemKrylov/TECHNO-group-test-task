const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//ROUTES
//get all shops
app.get("/shops", (res, rej) => {
  res.json({ shops: ["shop1", "shop2", "shop3", "shop4", "shop5"] });
});

//get all products from the shop
app.get("/shops/id/{id}", (res, rej) => {
  res.json({ shops: ["shop1", "shop2", "shop3", "shop4", "shop5"] });
});

//set order
app.post("/orders", async (req, res) => {
  try {
    console.log(req.body);
  } catch (error) {
    console.error(error);
  }
});

//start listening
app.listen(5000, () => {
  console.log("server started on port 5000");
});
// /ROUTES

//get
const shops = [
  {
    id: "string",
    name: "shopName",
    shopAddress: "shopAddress",
  },
];

//get
const products = [
  {
    productName: "productName",
    price: 1,
    number: 100,
  },
];

//post
const orders = [
  {
    name: "string",
    email: "string",
    phone: "string",
    customerAddress: "string",
    shop: { name: "shopName", shopAddress: "shopAddress" },
    orderItems: [],
    totalPrice: 100,
  },
];
