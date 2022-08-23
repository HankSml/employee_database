const connection = require('../config/connection');
const { startMenu } = require('../utils/handlers');
const { home } = require('../utils/questions');

class Query {
    constructor(table) {
        this.table = table;
    }

}

module.exports = Query;