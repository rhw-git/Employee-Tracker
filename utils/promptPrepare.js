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
    'update an employee role',
  ],
};
// promptQuestions AddDepartment
const promptQuestionAddDepartment = {
  type: 'input',
  message: 'What is the new department name?',
  name: 'departmentName',
};
// promptQuestions role
const promptQuestionAddRole = [
  {
    type: 'input',
    message: 'What is the new title of this role?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'What is the salary of this new role?',
    name: 'salary',
  },
  {
    type: 'input',
    message: 'What department this role belong to?',
    name: 'department',
  },
];
// promptQuestions add employee
const promptQuestionAddEmployee = [
  {
    type: 'input',
    message: 'What is the first name of this new employee?',
    name: 'firstName',
  },
  {
    type: 'input',
    message: 'What is the last name of this new employee?',
    name: 'lastName',
  },
];
// promptQuestions role
const promptQuestionUpdateEmployee = [
  {
    type: 'list',
    message: 'Select an employee to update?',
    name: 'employee',
    choices: [],
  },
  {
    type: 'list',
    message: 'What is the new role of this employee',
    name: 'role',
    choices: [],
  },
];
// export objects
module.exports = {
  header,
  promptQuestions,
  promptQuestionAddDepartment,
  promptQuestionAddRole,
  promptQuestionAddEmployee,
  promptQuestionUpdateEmployee,
};
