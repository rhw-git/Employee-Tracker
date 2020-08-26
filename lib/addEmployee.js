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
const commandLinePrompt = require('../server');
//-----------------add Empolyee function -------------------//
const addEmployee = async (commandLinePrompt) => {
  // const query1 = `SELECT
  //     CONCAT(first_name, " ", last_name) AS Manager
  //     FROM employees`;
  // poolGetConnectReadCol(query1).then((res) => {
  //   managers = res.map((res) => {
  //     return res.Manager;
  //   });
  //   console.log(managers);
  //   return managers;
  // });
  let questions = promptQuestionAddEmployee();
  inquirer.prompt(questions);
};

module.exports = addEmployee;
