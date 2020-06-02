// const {Pool,Client} = require('pg')
// const  connectionString = 'postgressql://postgres:12345@localhost:5432/test'

// const client = new Client({
//     connectionString:connectionString
// })

// module.exports = client.connect()
// console.log("connected to db")


var pg = require('pg');
var pool;
var config = {
  user: 'postgres',
  database: 'test',
  password: 12345,
  port: 5432, 
  max: 10,
  idleTimeoutMillis: 30000,
};

module.exports = {
    getPool: function () {
      if (pool) return pool; // if it is already there, grab it here
      pool = new pg.Pool(config);
      return pool;
    }
};