// import pool
const pool = require('../server').pool;
// get pool connect and run query in it
const poolGetConnect = (query) => {
  pool.query(query, function (err, res) {
    if (err) throw err;
    // use connection to read table
    console.table(res);
  });
};
module.exports = poolGetConnect;
