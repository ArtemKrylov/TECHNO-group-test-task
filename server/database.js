const { Pool } = require("pg");

// const pool = new Pool({
//   user: "postgres",
//   password: "3252223",
//   host: "localhost",
//   port: 5432,
//   database: "technoapp",
// });

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
});

pool.connect((err) => {
  if (err) throw err;
  console.log("Connect to PostgreSQL successfully!");
});

module.exports = pool;
