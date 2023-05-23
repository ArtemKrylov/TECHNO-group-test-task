const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//ROUTES
//get all shops
app.get("/shops", async (req, res) => {
  try {
    const shops = await pool.query("SELECT * FROM public.shops");
    res.json(shops.rows);
  } catch (error) {
    console.error(error);
  }
});

//get all products from the shop
app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const products = await pool.query(
      "SELECT * FROM public.products WHERE shop_id = $1",
      [id]
    );
    res.json(products.rows);
  } catch (error) {
    console.error(error);
  }
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
