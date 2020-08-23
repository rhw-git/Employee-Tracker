// import parkage inquirer package
const inquirer = require('inquirer');
// import parkage console.table
const cTable = require('console.table');
// import objects
const { promptQuestionAddEmployee } = require('../utils/promptPrepare');
// import get pool connection and query
const {
  poolGetConnectReadTables,
  poolGetConnectManipulateTables,
  poolGetConnectGetItem,
  poolGetConnectReadCol,
} = require('../utils/poolGetConnect');
//-----------------add Empolyee function -------------------//
const addEmployee = (commandLinePrompt) => {
  const query = `SELECT
    CONCAT(first_name, " ", last_name) AS Avaliable_Manager 
    FROM employees`;
  poolGetConnectReadCol(query).then((res) => {
    console.log('second', res);
  });

  // .then(function (res) {
  //   var result = res;
  //   console.log(result);
  //   console.log(result);
  // });

  // poolGetConnectReadTables(query)
  //   .then((res) => {
  //     console.log('hi');
  //     res.json();
  //   })
  //   .then((res) => {
  //     console.log(res);
  //   });

  // inquirer.prompt(promptQuestionAddEmployee);
};

module.exports = addEmployee;
