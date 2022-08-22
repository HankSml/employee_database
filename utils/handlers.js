const connection = require('../config/connection');
const inquirer = require('inquirer');
const cTable = require('console.table');
const Query = require('../models/Query');
const { home, qAddDepartment, qAddEmployee, qAddRole, qUpdateEmployee} = require('./questions');

function viewAllDepartments (data) {

}

function viewAllRoles () {
    inquirer.prompt([])
    .then(answers)
}

function viewAllEmployees () {
    inquirer.prompt([])
    .then(answers)
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

async function startMenu (prompt) {
    inquirer.prompt(prompt)
    .then(answers => {
    const choice = answers.start;
    let query = new Query();
        switch (choice) {
            case 'View All Departments':
                query.showDepartments();
                break;
            case 'View All Roles':
                
                break;
            case 'View All Employees':

                break;
            case 'Add a Department':

                break;
            case 'Add a Role':

                break;
            case 'Add an Employee':

                break;
            case 'Update an Employee`s Role':

                break;
            case 'Quit':
                console.log('Goodbye!');
                break;
            default: 
                console.log('Error');
                break;
        }
    });
}

module.exports = { startMenu, viewAllDepartments, viewAllEmployees, viewAllRoles, addRole, AddEmployee, addDepartment, updateEmployee};