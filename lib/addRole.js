// import parkage inquirer package
const inquirer = require('inquirer');
// import parkage console.table
const cTable = require('console.table');
// import objects
const { promptQuestionAddRole } = require('../utils/promptPrepare');
// import get pool connection and query
const {
  poolGetConnectGetItem,
  poolGetConnectManipulateTables,
} = require('../utils/poolGetConnect');
const { pool } = require('../server');
//-----------------add Department function -------------------//
const addRole = (commandLinePrompt) => {
  inquirer
    .prompt(promptQuestionAddRole)
    .then(({ title, salary, department }) => {
      // first query to select id by name from departments table to pass down to role table foreign key department_id later
      const query1 = `SELECT id FROM departments WHERE name = ?`;
      poolGetConnectGetItem(query1, [department])
        .then((res) => {
          if (res && res[0] && res[0][0] && res[0][0].id) {
            // do another query
            const query2 = `INSERT INTO roles(title, salary, department_id)
            VALUES (?,?,?)`;
            const department_id = res[0][0].id;
            poolGetConnectManipulateTables(query2, [
              title,
              salary,
              department_id,
            ]);
          }
        })
        .then(() => {
          commandLinePrompt();
        })
        .catch((error) => {
          console.log('ERROR=>', error);
        });
    });
};

module.exports = addRole;
