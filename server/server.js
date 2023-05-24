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
app.post("/orders/make-order", async (req, res) => {
  try {
    console.log(req.body);
    const {
      name,
      email,
      phone,
      customer_address,
      shop_id,
      order_items,
      total_price,
    } = req.body;

    const newOrder = await pool.query(
      `INSERT INTO orders (name,
        email,
        phone,
        customer_address,
        shop_id, total_price,
        order_items) VALUES($1,$2,$3,$4,$5,$6,$7)`,
      [name, email, phone, customer_address, shop_id, total_price, order_items]
    );
    res.json(newOrder);
  } catch (error) {
    console.error(error);
  }
});
// /ROUTES

//start listening
app.listen(process.env.PORT, () => {
  console.log("server started on port 5000");
});
