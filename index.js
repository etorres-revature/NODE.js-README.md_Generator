const inquirer = require("inquirer");
const fs = require("fs");
const markDown = require("./utils/generateMarkDown")

// array of questions for user
const questions = [ {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please describe your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "Please provide specific instructions for the installation of your project.",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide information on how users can use this project.",
  },
  {
    type: "input",
    name: "contribution",
    message: "What are the guidelines for making a contribution to this project?",
  },
  {
    type: "input",
    name: "test",
    message: "What are the instructions for testing this project?",
  },
  {
    type: "list",
    message: "Which license are you choosing for your project?",
    name: "license",
    choices: [
        "Apache License 2.0",
        "MIT License", 
        "BSD 2-Clause 'Simplified' License", 
        "BSD 3-Clause 'New' or 'Revised' License",
        "Boost Software License 1.0",
        "Creative Commons Zero v1.0 Universal",
        "Eclipse Public License 2.0", 
        "GNU Affero General Public License v3.0", 
        "GNU General Public License v2.0",
        "GNU Lesser General Public License v2.1"
    ]

  }, 
  {
      type: "input", 
      name: "github", 
      message: "Please enter your GitHub username."
  }, 
  {
      type: "input",
      name: "email", 
      message: "Please enter your e-mail address."
  }

];

// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, markDown(data), function(err) {
        if (err) {
            console.log(error);
        } else {
            console.log("SUCCESSS!!!!")
        }
    });
}

// function to initialize program
function init() {

}

// function call to initialize program
init();



