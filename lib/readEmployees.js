// import parkage console.table
const cTable = require('console.table');
// import pool
const pool = require('../server').pool;
//-----------------readTalbe founction -------------------//
const readEmployees = (action) => {
  pool.getConnection(function (err, connection) {
    if (err) throw err; // not connected!
    // use connection to read table
    const table = action.split(' ').splice(-1)[0];
    const query = `SELECT ${table}.id,
                   ${table}.first_name, 
                   ${table}.last_name, 
                   roles.title AS role_title, 
                   roles.salary AS role_salary
                   FROM ${table} LEFT JOIN roles
                   ON role_id = roles.id`;
    connection.query(query, function (err, res) {
      if (err) throw err;
      console.table(res);
      // release connection
      connection.release();
    });
  });
};
// export function
module.exports = readEmployees;
