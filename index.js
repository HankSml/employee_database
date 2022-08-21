const inquirer = require('inquirer');
const cTable = require('console.table');
const Query = require('./models/Query');
const prompts = new Rx.Subject();

const connection = require('./config/connection');
const { welcome, followUp } = require('./utils/questions');

inquirer.prompt(welcome)
.then(answers => {
    const choice = answers.start;
    switch (choice) {
        case 'View All Departments':
            
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