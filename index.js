//using require funciton to pull in other libraries/local files
const inquirer = require("inquirer");
const fs = require("fs");
const markDown = require("./utils/generateMarkDown");
const path = require("path");

//creating a director variable to push the generated README to the NODE.js Team Generator
const OUTPUT_DIR = path.resolve("../Github_Finder");

// array of questions for user
const questions = [
  {
    //title of project
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  //description of project
  {
    type: "input",
    name: "description",
    message: "Please describe your project.",
  },
  //project installation instructions
  {
    type: "input",
    name: "installation",
    message:
      "Please provide specific instructions for the installation of your project.",
  },
  //project usage instructions
  {
    type: "input",
    name: "usage",
    message: "Provide information on how users can use this project.",
  },
  //notes on how to make contributions
  {
    type: "input",
    name: "contribution",
    message:
      "What are the guidelines for making a contribution to this project?",
  },
  //testing instructions and other notes
  {
    type: "input",
    name: "test",
    message: "What are the instructions for testing this project?",
  },
  //list of available license options from GitHub
  {
    type: "list",
    message: "Which license are you choosing for your project?",
    name: "license",
    choices: [
      "Apache 2.0",
      "MIT",
      "BSD 2-Clause 'Simplified'",
      "BSD 3-Clause 'New' or 'Revised'",
      "Boost Software 1.0",
      "Creative Commons Zero v1.0 Universal",
      "Eclipse Public 2.0",
      "GNU Affero General Public v3.0",
      "GNU General Public v2.0",
      "GNU Lesser General Public v2.1",
      "Mozilla Public 2.0",
      "The Unlicense",
    ],
  },
  //GitHub username
  {
    type: "input",
    name: "github",
    message: "Please enter your GitHub username.",
  },
  //e-mail address
  {
    type: "input",
    name: "email",
    message: "Please enter your e-mail address.",
  },
  //name of developer
  {
    type: "input",
    name: "developer",
    message: "Please input your name.",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  //using the NODE.js built in file structure library to write the file - pass in filename, data from inquirer passed into the generateMarkdown() module, charset, and error handling
  fs.writeFile(fileName, markDown(data), "utf8", function (err) {
    //error handling
    if (err) {
      console.log("You have an error:", err);
    } else {
      //success
      console.log("SUCCESSS!!!!");
    }
  });
}

// function to initialize program
function init() {
  //use the inquirer library, pass in the questions array to the prompt funciton
  //use the promise to put the returned information into the writeToFile funciton
  //create the README
  inquirer.prompt(questions).then(function (data) {
    writeToFile(path.join(OUTPUT_DIR, "README.md"), data);
  });
}

// function call to initialize program
init();
