
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
        switch(data.pickAchoice) {
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

function viewDepartments() {db.query(`SELECT * FROM department`, (err, rows) => {
    if (err) {
        console.log(err);
      }
      console.log(rows);
      pickAchoice();
  });
};

function viewRoles() {db.query(`SELECT * FROM role`, (err, rows) => {
    if (err) {
        console.log(err);
      }
      console.log(rows);
      pickAchoice();
  });
};

function viewEmployees() {db.query(`SELECT * FROM employee`, (err, rows) => {
    if (err) {
        console.log(err);
      }
      console.log(rows);
      pickAchoice();
  });
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