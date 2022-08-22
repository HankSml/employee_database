const inquirer = require('inquirer');
const cTable = require('console.table');

const { home } = require('./utils/questions');
const Query = require('./models/Query');
const connection = require('./config/connection');
const handlers = require('./utils/handlers');

let employeeTest = 'employee'

function test () {
    connection.promise().query(`SELECT * FROM ${employeeTest}`)
        .then( ([rows,fields]) => {
        console.table(rows);
    })
    .then( () => connection.end())
    .then( () => {
        console.log('success!');
    });
}

test();
// handlers.startMenu(home);