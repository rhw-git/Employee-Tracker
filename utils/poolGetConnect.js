// import pool
const pool = require('../server').pool;
// get pool query for all read table functions
const poolGetConnectReadTables = (query) => {
  return pool.promise().query(query, function (err, res) {
    if (err) throw err;
    // use connection to read table
    console.table('\n', res);
  });
};
// get pool query for all manipulate table functions
const poolGetConnectManipulateTables = (query, params) => {
  return pool.promise().query(query, params, function (err, res) {
    if (err) throw err;
    console.log(res);
  });
};
// get pool query for items in one column
const poolGetConnectGetItem = (query, params) => {
  return pool.promise().query(query, [...params], function (err, res) {
    if (err) throw err;
    // return res
    return res;
  });
};
// get pool query for one column from a table
const poolGetConnectReadCol = (query) => {
  return new Promise((resolve, reject) => {
    pool.promise().query(query, function (err, res) {
      if (err) throw err;
      resolve(res);
    });
  });
};

module.exports = {
  poolGetConnectReadTables,
  poolGetConnectGetItem,
  poolGetConnectManipulateTables,
  poolGetConnectReadCol,
};
