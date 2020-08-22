// import parkage inquirer package
const inquirer = require('inquirer');
// import parkage console.table
const cTable = require('console.table');
// import objects
const { promptQuestionAddDepartment } = require('../utils/promptPrepare');
// import get pool connection and query
const { poolGetConnectManipulateTables } = require('../utils/poolGetConnect');
//-----------------add Department function -------------------//
const addDepartment = (repeate) => {
  inquirer.prompt(promptQuestionAddDepartment).then(({ departmentName }) => {
    const query = `INSERT INTO departments(name)
                     VALUES (?)`;
    const params = departmentName;
    let promise = new Promise((res, rej) => {
      poolGetConnectManipulateTables(query, params);
    });
    let timebreak = function wait() {
      setTimeout(() => {
        repeate;
      }, 500);
    };
  });
};

module.exports = addDepartment;
