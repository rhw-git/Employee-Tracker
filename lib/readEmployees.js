// import parkage console.table
const cTable = require('console.table');
const readRoles = require('./readRoles');
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
                   roles.salary AS role_salary, 
                   departments.name AS department, 
                   CONCAT(manager.first_name, ' ', manager.last_name) AS manager
                   FROM ${table} LEFT JOIN roles
                   ON role_id = roles.id
                   LEFT JOIN departments
                   ON roles.department_id = departments.id
                   LEFT JOIN ${table} manager
                   ON manager.id = ${table}.manager_id;
                   `;
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
