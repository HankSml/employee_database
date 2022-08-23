const pool = require('../config/connection');
const inquirer = require('inquirer');
const cTable = require('console.table');
const { home, qAddDepartment, qAddEmployee, qAddRole, qUpdateEmployee} = require('./questions');

function viewAllDepartments () {
    pool.promise().query("SELECT * FROM departments")
    .then( ([rows, fields]) => {
        console.table(rows);
    })
    .then( () => {
        startMenu(home);
    });
}

function viewAllRoles () {
    pool.promise().query(
    `SELECT r.title, r.id, r.salary, d.name
    FROM departments d INNER JOIN roles r
    ON d.id = r.department_id`)
    .then( ([rows, fields]) => {
        console.table(rows);
    })
    .then( () => {
        startMenu(home);
    });
}

function viewAllEmployees () {
    pool.promise().query(
        "SELECT " + 
            "e.id, " +
            "CONCAT(e.first_name, ' ', e.last_name) AS name, " +
            "r.title, " +
            "d.name AS department, " +
            "r.salary, " +
            "CONCAT(m.first_name, ' ', m.last_name) AS manager " +
        "FROM employees e " +
        "LEFT JOIN roles r ON e.role_id = r.id " +
        "LEFT JOIN departments d ON d.id = r.department_id " +
        "LEFT JOIN employees m ON m.id = e.manager_id")
        .then( ([rows, fields]) => {
            console.table(rows);
        })
        .then( () => {
            startMenu(home);
        });
}

function addRole () {
    inquirer.prompt(qAddRole)
    .then(answers)
}

function AddEmployee () {
    inquirer.prompt(qAddEmployee)
    .then(answers)
}

function addDepartment () {
    inquirer.prompt(qAddDepartment)
    .then(answers)
}

function updateEmployee () {
    inquirer.prompt(qUpdateEmployee)
    .then(answers)
}

function startMenu (prompt) {
    inquirer.prompt(prompt)
    .then(answers => {
    const choice = answers.start;
        switch (choice) {
            case 'View All Departments':
                viewAllDepartments();
                break;
            case 'View All Roles':
                viewAllRoles();
                break;
            case 'View All Employees':
                viewAllEmployees();
                break;
            case 'Add a Department':
                addDepartment();
                break;
            case 'Add a Role':
                addRole();
                break;
            case 'Add an Employee':
                AddEmployee();
                break;
            case 'Update an Employee`s Role':
                updateEmployee();
                break;
            case 'Quit':
                console.log('Goodbye!');
                pool.end();
                break;
            default: 
                console.log('Error');
                break;
        }
    });
}

module.exports = { startMenu, viewAllDepartments, viewAllEmployees, viewAllRoles, addRole, AddEmployee, addDepartment, updateEmployee};