// import parkage console.table
const cTable = require('console.table');
// import getPoolConnect
const poolGetConnect = require('../utils/poolGetConnect');

//-----------------readTalbe founction -------------------//
function readDepartments(action, repeate) {
  const table = action.split(' ').splice(-1)[0];
  const query = `SELECT * FROM ${table}`;
  let promise = new Promise((res, rej) => {
    poolGetConnect(query);
  });
  let timebreak = function wait() {
    setTimeout(() => {
      repeate;
    }, 500);
  };
}

//
// export function
module.exports = readDepartments;
