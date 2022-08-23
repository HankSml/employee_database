const inquirer = require('inquirer');

const home = [
    {
        name: 'start',
        message: 'What would you like to do?',
        type: 'list',
        choices: [
            'View All Departments',
            'View All Roles',
            'View All Employees',
            'Add a Department',
            'Add a Role',
            'Add an Employee',
            'Update an Employee`s Role',
            'Quit'
        ],
        loop: false
    }
];

const qAddDepartment = [
    {
        name: 'newDepartment',
        message: 'What is the name of the new department?',
        type: 'input'
    },
];

const qAddEmployee = [
    {
        name: 'firstName',
        message: 'Employee`s first name?',
        type: 'input'
    },
    {
        name: 'lastName',
        message: 'Last name?',
        type: 'input'
    },
    {
        name: 'role',
        message: 'Their role?',
        type: 'input'
    },
    {
        name: 'manager',
        message: 'Last name of manager?',
        type: 'input'
    }
];

const qAddRole = [
    {
        name: 'title',
        message: 'What is the name of the new role?',
        type: 'input'
    },
    {
        name: 'salary',
        message: 'The salary?',
        type: 'input',
    },
    {
        name: 'department',
        message: 'What department does the role belong to?',
        type: 'input'
    }

];

const qUpdateEmployee = [
    {
        name: 'employee',
        message: 'Which employee would you like to update?',
        type: 'list',
        choices: []
    },
    {
        name: 'newRole',
        message: 'What is their new role?',
        type: 'list',
        choices: []
    }
];

module.exports = {
    home: home,
    qAddDepartment: qAddDepartment,
    qAddEmployee: qAddEmployee,
    qAddRole: qAddRole,
    qUpdateEmployee: qUpdateEmployee
};