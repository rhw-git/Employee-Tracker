// import parkage inquirer package
const inquirer = require('inquirer');
// import parkage console.table
const cTable = require('console.table');
// import objects
const { promptQuestionAddDepartment } = require('../utils/promptPrepare');
// import get pool connection and query
const { poolGetConnectManipulateTables } = require('../utils/poolGetConnect');
//-----------------add Department function -------------------//
const addDepartment = (commandLinePrompt) => {
  inquirer.prompt(promptQuestionAddDepartment).then(({ departmentName }) => {
    const query = `INSERT INTO departments(name)
                   VALUES (?)`;
    const params = departmentName;
    // wait for this to resolve or reject
    poolGetConnectManipulateTables(query, params)
      //then call invoke the repeate callback
      .then(() => {
        // calls the commandLinePrompt again
        commandLinePrompt();
      })
      .catch((error) => {
        console.log('ERROR=>', error);
      });
  });
};

module.exports = addDepartment;
