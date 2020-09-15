const inquirer = require("inquirer");
const fs = require("fs");

function generateMarkDown(data)  {`
![NPM License](https://img.shields.io/npm/l/${data.license})

# Project Title : ${data.title}

## Project Description

${data.installation}

## Table of Contents
* [Title](#project-title)
* [Description](#project-description)
* [Table of Contents]()
* [Installation](#installation-instructions)
* [Usage](#usage)
* [License](#license)
* [Constributing](#contributing)
* [Tests](#tests)
* [Questions](#questios)

## Installation Instructions

${data.installation}

## Usage 

${data.usage}

## License

This application usese the ${data.license}.

## Contributing

## Tests

## Questions

Check out my [GitHub profile](https://github.com/${data.github}).

You can contact me by e-mail at ${data.email} for any additional questions and/ or clarifications you may need about the project.
`
}

inquirer
  .prompt([
    {
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
      name: "license-type",
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
  ])
  .then((data) => {

    fs.writeFile("README.md", generateMarkDown(data), function(err) {
        if (err) {
            console.log(error);
        } else {
            console.log("SUCCESSS!!!!")
        }
    })
  })

