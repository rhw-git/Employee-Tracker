// import parkage console.table
const cTable = require('console.table');
// import pool
const pool = require('../server').pool;
//-----------------readTalbe founction -------------------//
const readRoles = (action) => {
  pool.getConnection(function (err, connection) {
    if (err) throw err; // not connected!
    // use connection to read table
    const table = action.split(' ').splice(-1)[0];
    const query = `SELECT ${table}.id, 
                   ${table}.title, 
                   ${table}.salary, 
                   departments.name AS department_name
                   FROM ${table} LEFT JOIN departments
                   ON department_id = departments.id`;
    connection.query(query, function (err, res) {
      if (err) throw err;
      console.table(res);
      // release connection
      connection.release();
    });
  });
};
// export function
module.exports = readRoles;
