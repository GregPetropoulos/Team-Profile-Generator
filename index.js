// node modules
const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./src/page-template.js");

// lib modules
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const newStaffMemberData = [];


const questions = [
  {
    type: "list",
    message: "What is your role?",
    choices: ["Employee", "Engineer", "Intern", "Manager"],
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
  },
];

// function team wraps all the employee, engineer, intern, manager function and their user inputs  pushed into an array
function teamData() {
  // takes user inputs from questions array and with the promise method, will push into teamArr
  // HOW TO DRY it out?
  function employee() {
    inquirer.prompt(questions).then((data) => {
      const newEmployee = new Employee(data.name, data.id, data.email);
      newStaffMemberData.push(newEmployee);
    });
  }

  function engineer() {
    inquirer.prompt(questions).then((data) => {
      const newEngineer = new Engineer(
        data.name,
        data.id,
        data.email,
        data.github
      );
      newStaffMemberData.push(newEngineer);
    });
  }

  function intern() {
    inquirer.prompt(questions).then((data) => {
      const newIntern = new Intern(
        data.name,
        datae.id,
        data.email,
        data.school
      );
      newStaffMemberData.push(newIntern);
    });
  }

  function manager() {
    inquirer.prompt(questions).then((data) => {
      const newManager = new Manager(
        data.name,
        data.id,
        data.email,
        data.officeNumber
      );
      newStaffMemberData.push(newManager);
    });
  }
}

// Write the page-template file to the html file that is created in this function
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

// Create function to intitilaize app
// STUCK HERE---------
function init() {
  const res = teamData(newStaffMemberData)
  const response = generateTeam(team);
    writeToFile("index.html", response);
    writeToFile('index.html',res)
  }

init()
