const postgre = require("../database");

const appController = {
  //get all shops
  // getAll: async (req, res) => {
  //   try {
  //     const { rows } = await postgre.query("SELECT * FROM public.shops");
  //     res.json(rows);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // },
  //get all products from the shop
  // getProductsByShopId: async (req, res) => {
  //   const { id } = req.params;
  //   try {
  //     const products = await postgre.query(
  //       "SELECT * FROM public.products WHERE shop_id = $1",
  //       [id]
  //     );
  //     res.json(products.rows);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // },
  //create order
  // createOrder: async (req, res) => {
  //   try {
  //     console.log(req.body);
  //     const {
  //       name,
  //       email,
  //       phone,
  //       customer_address,
  //       shop_id,
  //       order_items,
  //       total_price,
  //     } = req.body;

  //     const newOrder = await postgre.query(
  //       `INSERT INTO orders (name,
  //       email,
  //       phone,
  //       customer_address,	
  //       shop_id, total_price,
  //       order_items) VALUES($1,$2,$3,$4,$5,$6,$7)`,
  //       [
  //         name,
  //         email,
  //         phone,
  //         customer_address,
  //         shop_id,
  //         total_price,
  //         order_items,
  //       ]
  //     );
  //     res.json(newOrder);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // },
};

module.exports = appController;
