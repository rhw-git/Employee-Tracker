// import pool
const pool = require('../server').pool;

const getConnection = function {
  pool.getConnection(function (err, connection) {
      // not connected
    if (err) throw err;
  });
};

module.exports = getConnection;
