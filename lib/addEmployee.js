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
const addEmployee = async (commandLinePrompt) => {
  const query = `SELECT
    CONCAT(first_name, " ", last_name) AS Avaliable_Manager 
    FROM employees`;
  let promise = new Promise((resolve, reject) => {
    poolGetConnectReadCol(query);
  }).then((res) => {
    // this res is just catched here
    console.log(res);
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
