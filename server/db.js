const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "3252223",
  host: "localhost",
  port: 5432,
  database: "deliveryapp",
});

module.exports = pool;
