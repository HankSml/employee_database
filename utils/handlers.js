const pool = require('../config/connection');
const inquirer = require('inquirer');
const cTable = require('console.table');
const { qAddDepartment, qAddEmployee, qAddRole} = require('./questions');

async function viewAllDepartments() {
    let data = await pool.query("SELECT * FROM departments");
    console.table(data[0])
    return data
}

async function viewAllRoles () {
    let data = await pool.query(
    `SELECT r.title, r.id, r.salary, d.name
    FROM departments d INNER JOIN roles r
    ON d.id = r.department_id`)
    console.table(data[0])
    return data
}

async function viewAllEmployees () {
    let data = await pool.query(
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
        console.table(data[0])
        return data
}

async function addRole () {
    let {title, salary, department} = await inquirer.prompt(qAddRole);
    const rawTable = await pool.query("SELECT * FROM departments");
    const departmentTable = rawTable[0];

    let departmentId = 0;
    departmentTable.map(curr => {
        if (curr.name == department) departmentId = curr.id 
    })

    const newRole = await pool.query(
        "INSERT INTO roles (title, salary, department_id) " +
        `VALUES ('${title}', '${salary}', '${departmentId}');`
    );
    console.log(newRole[0]);
    return newRole
}

async function AddEmployee () {
    const {firstName, lastName, role, manager} = await inquirer.prompt(qAddEmployee);

    const rawRoleTable = await pool.query("SELECT * FROM roles");
    const roleTable = rawRoleTable[0];
    let roleId = 0;
    roleTable.map(currRole => {
        if (role === currRole.title) roleId = currRole.id
    })

    const rawEmployeeTable = await pool.query("SELECT * FROM employees");
    const employeeTable = rawEmployeeTable[0];
    let managerId = 0;
    employeeTable.map(currEmp => {
        if (manager === currEmp.last_name) managerId = currEmp.id
    })

    const newEmployee = await pool.query(
        "INSERT INTO employees (first_name, last_name, role_id, manager_id)" +
        `VALUES ('${firstName}', '${lastName}', '${roleId}', '${managerId}')`
    );

    return newEmployee
}

async function addDepartment () {
    const { deptName } = await inquirer.prompt(qAddDepartment);

    const newDepartment = await pool.query(
        "INSERT INTO departments(name) " +
        `VALUES('${deptName}')`
    );
    return newDepartment
}

async function updateEmployee () {
    const rawEmpList = await pool.query("SELECT first_name, last_name FROM employees")
    const empList = rawEmpList[0];
    let currentEmployees = [];

    for (let i = 0; i < empList.length; i++) {
        const employee = `${empList[i].last_name}`
        currentEmployees.push(employee)
    }

    const rawRoleList = await pool.query(`SELECT title FROM roles`)
    const roleList = rawRoleList[0];
    let currentRoles = [];

    for (let i = 0; i < roleList.length; i++) {
        const role = `${roleList[i].title}`
        currentRoles.push(role);
    }

    const {lastName, newRole} = await inquirer.prompt(
        [{
            type: 'list',
            name: 'employee',
            message: "Which employee would you like to update their role?",
            choices: currentEmployees
        },
        {
            name: 'newRole',
            message: 'What is their new role?',
            type: 'list',
            choices: currentRoles
        }
    ])

    const newRoleId = await pool.query(`SELECT id FROM roles WHERE title = '${newRole}'`)
    const updatedEmployee = await pool.query(`UPDATE employees  
    SET role_id = '${newRoleId}'
    WHERE last_name ='${lastName}'`)

    console.log('Updated!')
    return updatedEmployee
}

module.exports = { viewAllDepartments, viewAllEmployees, viewAllRoles, addRole, AddEmployee, addDepartment, updateEmployee};