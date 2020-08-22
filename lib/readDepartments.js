// import parkage console.table
const cTable = require('console.table');
// import getPoolConnect
const { poolGetConnectReadTables } = require('../utils/poolGetConnect');
//-----------------readTalbe founction -------------------//
const readDepartments = (action, commandLinePrompt) => {
  const table = action.split(' ').splice(-1)[0];
  const query = `SELECT * FROM ${table}`;
  // wait for this to resolve or reject
  poolGetConnectReadTables(query);
  commandLinePrompt();
};

// export function
module.exports = readDepartments;
