const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./src/page-template.js");
const team = [];
const Manager = require("./lib/Manager");

const questions = [
  {
    type: "list",
    message: "What is your role?",
    choices: ['Intern','Engineer', 'Manager', 'Employee']
  },
  {
    type: "input",
    message: "What is your name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your ID number?",
    name: "id",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
  {
    type: "input",
    message: "What university did you attend?",
    name: "school",
  },
  {
    type: "input",
    message: "What is your GitHub user name?",
    name: "github",
  }
];

function manager() {
  inquirer.prompt(questions)
    .then((data) => {
      cosnt newManager = new Manager(data.name, data.id, data.email, data.officeNumber)
      team.push(newManager);
    });
    
  }
  
  
  //     fs.writeFile("index.html", generateTeam(data), (err) =>
  //        err ? console.log(err) : console.log('Success!')
  //  );
