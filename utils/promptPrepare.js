// ----------------------- prepare for prompt ---------------------//
// header
const header = `
//---------------------------------------//
|                                         |
|        STARTING EMPLOYEE TRACKER        |
|                                         |
//---------------------------------------//
 `;
// promptQuestions
const promptQuestions = {
  type: 'list',
  message: 'What would you like to do?',
  name: 'action',
  choices: [
    'view all departments',
    'view all roles',
    'view all employees',
    'add a department',
    'add a role',
    'add an employee',
    'and update an employee role',
  ],
};
// promptQuestions AddDepartment
const promptQuestionAddDepartment = {
  type: 'input',
  message: 'What is the new department name?',
  name: 'departmentName',
};
// export objects
module.exports = { header, promptQuestions, promptQuestionAddDepartment };
