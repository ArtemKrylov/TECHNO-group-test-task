const Pool = require("pg").Pool;

// const pool = new Pool({
//   user: "postgres",
//   password: "3252223",
//   host: "localhost",
//   port: 5432,
//   database: "deliveryapp",
// });

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
});

module.exports = pool;
