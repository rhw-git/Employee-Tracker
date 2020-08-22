// import parkage console.table
const cTable = require('console.table');
// import getPoolConnect
const { poolGetConnectReadTables } = require('../utils/poolGetConnect');
//-----------------readTalbe founction -------------------//
const readRoles = (action) => {
  const table = action.split(' ').splice(-1)[0];
  const query = `SELECT ${table}.id, 
                   ${table}.title, 
                   ${table}.salary, 
                   departments.name AS department_name
                   FROM ${table} LEFT JOIN departments
                   ON department_id = departments.id`;
  let promise = new Promise((res, rej) => {
    poolGetConnectReadTables(query);
  });
  let timebreak = function wait() {
    setTimeout(() => {
      repeate;
    }, 500);
  };
};
// export function
module.exports = readRoles;
