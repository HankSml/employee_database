const connection = require('../config/connection');

class Query {
    constructor(table) {
        this.table = table;
    }
    showDepartments() {
        connection.promise().query("SELECT * FROM employee")
        .then( ([rows, fields]) => {
            console.table(rows);
        })
        .then( () => connection.end())
        .then( () => {
            console.log('success!');
        });
    }
}

module.exports = Query;