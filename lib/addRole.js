// import parkage inquirer package
const inquirer = require('inquirer');
// import parkage console.table
const cTable = require('console.table');
// import objects
const { promptQuestionAddRole } = require('../utils/promptPrepare');
// import get pool connection and query
const {
  poolGetConnectReadTables,
  poolGetConnectManipulateTables,
} = require('../utils/poolGetConnect');
//-----------------add Department function -------------------//
const addRole = (repeate) => {
  inquirer
    .prompt(promptQuestionAddRole)
    .then(({ title, salary, department }) => {
      const query1 = `SELECT id FROM departments WHERE name = "${department}"`;
      const query2 = `
                     INSERT INTO roles(title, salary, department_id)
                     VALUES (?,?,?)
                     `;
      let promise1 = new Promise((res, rej) => {
        poolGetConnectReadTables(query1);
        return res;
      });
      let timebreak = function wait(res) {
        setTimeout(() => {
          const params = { title, salary, res };
          return consoel.log(params);
        }, 500);
      };

      //   let promise2 = new Promise(params, (res, rej) => {
      //     poolGetConnectManipulateTables(query2, params);
      //   });
      //   let timebreak = function wait() {
      //     setTimeout(() => {
      //       repeate;
      //     }, 500);
      //   };
    });
};

module.exports = addRole;
