const inquirer = require('inquirer');
const cTable = require('console.table');

const { home } = require('./utils/questions');
const Query = require('./models/Query');
const pool = require('./config/connection');
const handlers = require('./utils/handlers');

handlers.startMenu(home);