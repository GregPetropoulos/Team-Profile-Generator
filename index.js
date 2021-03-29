const inquirer = require("inquirer");
const fs = require("fs");
const pageTemplate = require("./src/page-template.js");
const questions = [
  {
    type: "input",
    message: "What is your name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your ID number",
    name: "id",
  },
  {
    type: "input",
    message: "What is your email",
    name: "email",
  },
];

// TODO: Create a function to write to html, will place this in function init
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  // prompt method calls in array of questions
  inquirer
    .prompt(questions)
    // promise, answers function takes answer responses and writes to readme
    .then((answers) => {
      console.log(answers);
      const response = pageTemplate(answers);
      writeToFile("index.html", response);
    });
}

// Function call to initialize app
init();
