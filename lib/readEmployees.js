// import parkage console.table
const cTable = require('console.table');
// import getPoolConnect
const poolGetConnect = require('../utils/poolGetConnect');
//-----------------readTalbe founction -------------------//
const readEmployees = (action, repeate) => {
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
  let promise = new Promise((res, rej) => {
    poolGetConnect(query);
  });
  let timebreak = function wait() {
    setTimeout(() => {
      repeate;
    }, 500);
  };
};
// export function
module.exports = readEmployees;
