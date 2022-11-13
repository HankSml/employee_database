const inquirer = require('inquirer');
const cTable = require('console.table');

const { home } = require('./utils/questions');
const pool = require('./config/connection');
const { viewAllDepartments, viewAllEmployees, viewAllRoles, addRole, AddEmployee, addDepartment, updateEmployee} = require('./utils/handlers');


async function runApplication (menu) {
    let cont = true;
    while (cont === true) {
        let answers = await inquirer.prompt(menu)
        let currCase;
        const choice = answers.start;
            switch (choice) {
                case 'View All Departments':
                    currCase = await viewAllDepartments();
                    break;
                case 'View All Roles':
                    currCase = await viewAllRoles();
                    break;
                case 'View All Employees':
                    currCase = await viewAllEmployees();
                    break;
                case 'Add a Department':
                    currCase = await addDepartment();
                    break;
                case 'Add a Role':
                    currCase = await addRole();
                    break;
                case 'Add an Employee':
                    currCase = await AddEmployee();
                    break;
                case 'Update an Employee`s Role':
                    currCase = await updateEmployee();
                    break;
                case 'Quit':
                    console.log('Goodbye!');
                    pool.end();
                    cont = false;
                    break;
                default: 
                    console.log('Error');
                    break;
            }
    }
}

runApplication(home);