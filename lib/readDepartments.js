// import parkage console.table
const cTable = require('console.table');
// import getPoolConnect
const { poolGetConnectReadTables } = require('../utils/poolGetConnect');
//-----------------readTalbe founction -------------------//
const readDepartments = (action, repeate) => {
  const table = action.split(' ').splice(-1)[0];
  const query = `SELECT * FROM ${table}`;
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
module.exports = readDepartments;
