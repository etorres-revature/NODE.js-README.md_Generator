function generateMarkDown(data)  {
    return `
![Github License](https://img.shields.io/badge/License-${data.license.split(" ").join("_")}-brightgreen)

# ${data.title}

## Project Description

${data.description}

## Table of Contents

* [Title](#project-title)
* [Description](#project-description)
* [Table of Contents](#table-of-congents)
* [Installation](#installation-instructions)
* [Usage](#usage)
* [Contributing](#guidelines-for-contributing)
* [Tests](#tests)
* [Technologies](#technologies-used)
* [Author](#author)
* [Questions](#questions)
* [License](#license)

## Installation Instructions

${data.installation}

## Usage 

${data.usage}

## Guidelines for Contributing

${data.contribution}

## Tests

${data.test}

### Technologies Used 

#### :sparkler: JavaScript :sparkler:

**JavaScript (JS)** is one of the core technologies of the World Wide Web (along with HTML and CSS). It enables interactive web pages and is an essential part of web applications.  JS is a multi-faceted, scripting language that provides versatility through Application Programming Interfaces (APIs) and Document Object Model (DOM) manipulation, among others.

*JavaScript* content borrowed from <a target="_blank" rel="noopener noreferrer">[this page](https://en.wikipedia.org/wiki/JavaScript).</a>

#### :globe_with_meridians: NODE.js :globe_with_meridians:

**NODE.js** is an open-source, corss-platform JavaScript runtime environment that execute JavaScript code outside a web browser.  Node.js lets developers use JavaScript to write command line tools and for server-side scripting.  Node.js represents a "Javascript everywhere" paradigm, unifying web-application development around a single programming language, rather than different programming languages for server- and client-side scripts.  

*NODE.js* content borrowed from <a target="_blank" rel="noopener noreferrer">[this page](https://en.wikipedia.org/wiki/Node.js).

[Download Node.js](https://nodejs.org/en/).

### Author 

This ${data.title} was built by :green_heart: ${data.developer} :green_heart:

## Questions

Check out my [GitHub profile](https://github.com/${data.github}).

You can contact me by e-mail at ${data.email} for any additional questions and/ or clarifications you may need about the project.

##### License

This application usese the ${data.license}.
`;
}

module.exports = generateMarkDown