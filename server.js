const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql2');
// create connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '11dluocRw5?421`',
  database: 'employee_trackerDB',
});
// export pool
exports.pool = pool;

//-----------------------import from support *.js -------------------------//
// import functions
const readDepartments = require('./lib/readDepartments');
const readRoles = require('./lib/readRoles');
const readEmployees = require('./lib/readEmployees');
const addDepartment = require('./lib/addDepartment');
// import objects
const { header, promptQuestions } = require('./utils/promptPrepare');

// class Server {
function commandLinePrompt() {
  // console.log title of this app
  console.log(header);
  inquirer.prompt(promptQuestions).then(({ action }) => {
    if (action === 'view all departments') {
      readDepartments(action, commandLinePrompt());
    } else if (action === 'view all roles') {
      readRoles(action, commandLinePrompt());
    } else if (action === 'view all employees') {
      readEmployees(action, commandLinePrompt());
    } else if (action === 'add a department') {
      addDepartment(action);
    }
  });
}
// }

// export for test

commandLinePrompt();
