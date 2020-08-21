// import parkage inquirer package
const inquirer = require('inquirer');
// import parkage console.table
const cTable = require('console.table');
// import pool
const pool = require('../server').pool;
// import objects
const { promptQuestionAddDepartment } = require('../utils/promptPrepare');
//-----------------add Department function -------------------//

const addDepartment = (action) => {
  inquirer.prompt(promptQuestionAddDepartment).then(({ departmentName }) => {
    pool.getConnection(function (err, connection) {
      if (err) throw err; // not connected!
      // use connection to read table
      const query = `INSERT INTO departments(name)
                     VALUES (?)`;
      const params = departmentName;
      connection.query(query, params, function (err, result) {
        if (err) throw err;
        console.log(result, this.lastID);
        // release connection
        connection.release();
      });
    });
  });
};

module.exports = addDepartment;
