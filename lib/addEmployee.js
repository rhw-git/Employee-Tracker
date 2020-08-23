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
  const query1 = `SELECT
      CONCAT(first_name, " ", last_name) AS Avaliable_Manager 
      FROM employees`;
  const data = await poolGetConnectReadCol(query1);
  console.log('data=>', data); // this console.log does not run at all
};

module.exports = addEmployee;
