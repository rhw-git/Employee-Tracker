// import pool
const pool = require('../server').pool;
// import functions
const { poolGetConnectReadCol } = require('../utils/poolGetConnect');
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
// get all the available roles from database
const checkRoles = async () => {
  const query = `SELECT title FROM roles`;
  const roles = poolGetConnectReadCol(query)
    // organize the res into an array of title strings
    .then((res) => {
      rolesData = res.map((res) => {
        return res.title;
      });
      // console.log('ROLE DATA', rolesData); // works!
      return rolesData;
    });
  return roles;
};
// get all the available  from database
const checkManager = () => {
  const query = `SELECT
    CONCAT(first_name, " ", last_name) AS Managers
    FROM employees`;
  const managers = poolGetConnectReadCol(query)
    // organize the res into an array of manager name strings
    .then((res) => {
      managersData = res.map((res) => {
        return res.Managers;
      });
      // console.log('IN PROMISE', managersData); // works!
      return managersData;
    });
  return managers;
};

// update the promptQuestions with roles and
async function promptQuestionAddEmployee() {
  const managers = await checkManager();
  const roles = await checkRoles();
  const prompts = [
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
    {
      type: 'list',
      message: 'what is the role of this new employee',
      name: 'manager',
      choices: roles,
    },
    {
      type: 'list',
      message: 'Whose is their manager?',
      name: 'manager',
      choices: managers,
    },
  ];
  return prompts;
}

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

async function it_should_return_a_list_of_managers_unit_test() {
  const managers = await checkManager();
  console.log('MANAGERS=>', managers);
}

it_should_return_a_list_of_managers_unit_test();
// export objects
module.exports = {
  header,
  promptQuestions,
  promptQuestionAddDepartment,
  promptQuestionAddRole,
  promptQuestionAddEmployee,
  promptQuestionUpdateEmployee,
};
