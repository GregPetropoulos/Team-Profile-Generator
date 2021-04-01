// node modules
const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./src/page-template.js");

// lib modules
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// Array for answers to questions
const newStaffMemberData = [];

// Array object questions asked in CLI to user
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

// function teamData wraps all the employee, engineer, intern, manager functions
// Take user answers pushed into newStaffMemberData array
// fs write the generateTeam to output directory
function teamData() {
  // takes user inputs from questions array and with the promise method, will push into newStaffMemberData
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
  // -------------stuck

  // Write the page-template file to the html file that is created in this function
  // Create the output directory if the output path doesn't exist
  if (!fs.existsSync("./output")) {
    fs.mkdirSync("./output");
  }
  fs.writeFileSync(
    "./output/index.html",
    generateTeam(newStaffMemberData),
    "utf-8"
  );
}
// end of teamData block
// teamData();

// Function to add staff members with specific Q&A from teamData
// Dynamicaly generate the html card
function addTeamMembers() {
  // if manager is selected in the first question, execute manager() and generateManager()
  if (questions.choices === "Manager") {
    manager();
    generateManager();
  } else if (questions.choices === "Engineer") {
    engineer();
    generateEngineer();
  } else if (questions.choices === "Intern") {
    intern();
    generateIntern();
  } else if (questions.choices === "Employee") {
    employee();
    generateEmployee()
  }
  return questions;
}

// Start app
function startApp(){
  teamData()
  addTeamMembers()
}
startApp()