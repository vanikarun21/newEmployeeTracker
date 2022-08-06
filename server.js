
const inquirer = require('inquirer');
const sqlconnection = require('./db/sqlconnection');
const cTable = require('console.table');


// const employee = require("./lib/employee");

// create the connection to database
// Connect to database



// prompts or choices to pick from
const pickAchoice = () => {
    inquirer.prompt([
        {
            name:'choose',
            type: 'list',
            message: "What would you like to do?",
            choices:['view all departments', 'view all roles', 'view all employees','add a department','add a role','add an employee'],
        }
    ]). then (data => {
        switch(data.choose) {
            case 'view all departments':
                viewDepartments();
                break;
            case 'view all roles':
                viewRoles();
                break;
            case 'view all employees':
                viewEmployees();
                break;
            case 'add a department':
                addDepartment();
                break;
            case 'add a role':
                addRole();
                break;
            case 'add an employee':
                addEmployee();
                break;
        }
    })
}

pickAchoice();

function viewDepartments() {sqlconnection.query(`SELECT * FROM department`, (err, rows) => {
    if (err) {
        console.log(err);
      }
      console.table(rows);
      pickAchoice();
  });
};

function viewRoles() {sqlconnection.query(`SELECT * FROM role`, (err, rows) => {
    if (err) {
        console.log(err);
      }
      console.table(rows);
      pickAchoice();
  });
};

function viewEmployees() {sqlconnection.query(`SELECT * FROM employee`, (err, rows) => {
    if (err) {
        console.log(err);
      }
      console.table(rows);
      pickAchoice();
  });
};

function addDepartment() {
    return inquirer.prompt(
        {
            type: 'input',
            name: 'deptName',
            message: 'add department name'
        }
    ).then(data => {
        const departmentName =data.deptName;
        const sql = `INSERT INTO department (department_name) 
        VALUES (?)`;
        // sqlconnection.promise().query(sql, departmentName, (err, result) => {
        //     if (err) {
        //       console.log(err);
        //     }
        //     console.log("GREEN LIGHT");
        //     console.table(result);

        // })
        sqlconnection.promise().query(sql, departmentName).then (data => {
            console.log('successful creation');
        })
        .then(data => {
            pickAchoice()
        
            }); 
    })
};
//  add a role
function addRole() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'roleName',
            message: 'add role name'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'add salary'
        },
        {
            type: 'input',
            name: 'department_id',
            message: 'input a number'
        }
    ]).then(data => {
        const addRole = [data.roleName,parseInt(data.salary),parseInt(data.department_id)]
        const sql = `INSERT INTO role (title, salary, department_id) 
        VALUES (?,?,?)`;
        // sqlconnection.promise().query(sql, departmentName, (err, result) => {
        //     if (err) {
        //       console.log(err);
        //     }
        //     console.log("GREEN LIGHT");
        //     console.table(result);

        // })
        sqlconnection.promise().query(sql,addRole).then (data => {
            console.log(data);
            console.log('successful creation');
        })
        .then(data => {
            pickAchoice()
        
            }); 
    })
};
// add an employee

function addEmployee() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'first',
            message: 'add first name'
        },
        {
            type: 'input',
            name: 'last',
            message: 'add last name'
        },
        {
            type: 'input',
            name: 'roleId',
            message: 'input a number'
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'input a number'
        }
    ]).then(data => {
        const addEmployee = [data.first,data.last,parseInt(data.roleId),parseInt(data.managerId)]
        const sql = `INSERT INTO employee (first_name,last_name,role_id,manager_id) 
        VALUES (?,?,?,?)`;
      
        sqlconnection.promise().query(sql,addEmployee).then (data => {
            console.log(data);
            console.log('successful creation');
        })
        .then(data => {
            pickAchoice()
        
            }); 
    })
};

//  if (pickAchoice.choose === 'view all department') {
//     return 
//  }
      
    
//     const addMemberAns = await prompt([
//         {
//           name:'addMember',
//           type: 'list',
//           choices: ['Add a new member', 'Create team'],
//           message: "What would you like to do next?"
//         }
//       ])
  
//       if (addMemberAns.addMember === 'Add a new member') {
//         return promptQuestions()
//       }
//       return createTeam();
//   }  
  
//   promptQuestions();


//   function for creating table

// function createTable () {}