// import pool
const pool = require('../server').pool;
// get pool query for all read table functions
const poolGetConnectReadTables = (query) => {
  pool.query(query, function (err, res) {
    if (err) throw err;
    // use connection to read table
    console.table(res);
    return res;
  });
};
// get pool query for all manipulate table functions
const poolGetConnectManipulateTables = (query, params) => {
  pool.query(query, params, function (err, res) {
    if (err) throw err;
    console.log(res);
  });
};
module.exports = { poolGetConnectReadTables, poolGetConnectManipulateTables };
