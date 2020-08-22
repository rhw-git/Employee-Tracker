// import parkage console.table
const cTable = require('console.table');
// import pool
const pool = require('../server').pool;

//-----------------readTalbe founction -------------------//
function readDepartments(action, repeate) {
  const promise = new Promise((res, rej) => {
    pool.getConnection(function (err, connection) {
      if (err) throw err; // not connected!
      // use connection to read table
      const table = action.split(' ').splice(-1)[0];
      const query = `SELECT * FROM ${table}`;
      connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        // release connection
        connection.release();
      });
    });
  });
  let result = promise;
  function wait() {
    setTimeout(() => {
      repeate;
    }, 500);
  }
  wait();
}

//
// export function
module.exports = readDepartments;
