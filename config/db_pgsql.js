const { Pool } = require('pg');
require('dotenv').config();

const isRender = process.env.RENDER === 'true';

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT),
  ssl: isRender ? { rejectUnauthorized: false } : false,
});

module.exports = pool;