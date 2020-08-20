const cTable = require('console.table');
const mysql = require('mysql2');
const readDepartments = require('../lib/readDepartments');
const commandLinePrompt = require('../server');
// create connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '11dluocRw5?421`',
  database: 'employee_trackerDB',
});
// export pool
exports.pool = pool;

jest.mock('../lib/readDepartments.js');

test('read department table', () => {
  commandLinePrompt;
  expect(validate).toBeTruthy;
});
