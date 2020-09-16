function generateMarkDown(data)  {
    return `
![Github License](https://img.shields.io/badge/License-${data.license.split(" ").join("_")}-brightgreen)

# Project Title - ${data.title}

## Project Description

${data.description}

## Table of Contents
* [Title](#project-title)
* [Description](#project-description)
* [Table of Contents](#table-of-congents)
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
`;
}

module.exports = generateMarkDown