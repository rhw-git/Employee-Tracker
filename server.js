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
// lisent to the aquire event
pool.on('acquire', function (connection) {
  console.log('Connection %d acquired', connection.threadId);
});

//-----------------------import from support *.js -------------------------//
// import functions
const readTable = require('./lib/readTables');
// import objects
const { header, promptQuestions } = require('./utils/promptPrepare');

CommandLinePrompt = () => {
  // console.log title of this app
  console.log(header);
  inquirer.prompt(promptQuestions).then(({ action }) => {
    if (
      action === 'view all departments' ||
      action === 'view all roles' ||
      action === 'view all employees'
    ) {
      readTable(action);
    }
  });
};

CommandLinePrompt();
