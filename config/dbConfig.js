const pg = require('pg-promise')();
const config = {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_NAME || 'hogwarts_crud',
}
const db = pg(config);

module.exports = db;
