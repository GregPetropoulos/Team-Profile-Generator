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
const questions = () => {
  return inquirer
    .prompt([
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
        type: "list",
        message: "What is your role?",
        name: "role",
        choices: ["Employee", "Engineer", "Intern", "Manager"],
      },
    ])
    .then((answers) => {
      console.log(answers);
      // if manager selected, answer these specific question
      if (answers.role === "Manager") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "What is your office number",
              name: "officeNumber",
            },
          ])
          .then((managerAns) => {
            const newManager = new Manager(
              answers.name,
              answers.id,
              answers.email,
              managerAns.officeNumber
            );
            console.log('managerAns');
          });

        // if engineer selected answer these set of questions
      } else if (answers.role === "Engineer") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "What is your GitHub user name?",
              name: "github",
            },
          ])
          .then((githubAns) => {
            const newEngineer = new Engineer(
              answers.name,
              answers.id,
              answers.email,
              githubAns.github
            );
            console.log("engineer");
          });
        // if intern selected answer these set of questions
      } else if (answers.role === "Intern") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "What university did you attend?",
              name: "school",
            },
          ])
          .then((internAns) => {
            const newIntern = new Intern(
              answers.name,
              answers.id,
              answers.email,
              internAns.school
            );
            console.log("intern");
          });
      } else {
        // const newEmployee = new Employee();
        // return newEmployee;
      }
  
    });
};

questions();


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
