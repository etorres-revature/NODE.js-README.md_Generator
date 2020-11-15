//function to generate markdown code that will become the README file

function generateMarkDown(data)  {
    return `
![Github License](https://img.shields.io/badge/License-${data.license.split(" ").join("_")}-brightgreen)

# ${data.title}

## Project Description

${data.description}

## Table of Contents

* [Title](#project-title)
* [Description](#project-description)
* [Table of Contents](#table-of-contents)
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
### :computer: :computer: :computer: :computer: :computer: :computer: 

#### :memo: HTML5 :memo:

**JavaScript (JS)** is one of the core technologies of the World Wide Web (along with HTML and CSS). It enables interactive web pages and is an essential part of web applications.  JS is a multi-faceted, scripting language that provides versatility through Application Programming Interfaces (APIs) and Document Object Model (DOM) manipulation, among others.

*JavaScript* content borrowed from <a target="_blank" rel="noopener noreferrer">[this page](https://en.wikipedia.org/wiki/JavaScript).</a>

**NODE.js** is an open-source, cross-platform JavaScript runtime environment that execute JavaScript code outside a web browser.  NODE.js lets developers use JavaScript to write command line tools and for server-side scripting.  NODE.js represents a "Javascript everywhere" paradigm, unifying web-application development around a single programming language, rather than different programming languages for server- and client-side scripts.  

*NODE.js* content borrowed from <a target="_blank" rel="noopener noreferrer">[this page](https://en.wikipedia.org/wiki/Node.js).</a>

[Download Node.js](https://nodejs.org/en/).

#### :satellite: Express.js :satellite:

**Express.js** is a minimal and flexible NODE.js web application framework that provides a robust set of features for web and mobile applications.  The myriad HTTP utility methods and middleware allow for the creation of a robust API.  Express.js provides a thin layer of fundamental features, without obscuring NODE.js features.

*Express.js* content borrowed from <a target="_blank" rel="noopener noreferrer">[this page](https://expressjs.com/).</a>

### :vertical_traffic_light: React.js :vertical_traffic_light:

**React.js** is an open-source, front-end, JavaScript library for building user interface components. React.js can be used as a base in the development of single-page or mobile applications.  It is only concerned with rendering data to the DOM.

*React.js* content borrowed from <a target="_blank" rel="noopener noreferrer">[this page](https://en.wikipedia.org/wiki/React_(web_framework)#:~:text=React%20(also%20known%20as%20React,single%2Dpage%20or%20mobile%20applications.).</a>

### Author 

This *${data.title}* was built by :green_heart: ${data.developer} :green_heart:

## Questions

Check out my [GitHub profile](https://github.com/${data.github}).

You can contact me by e-mail at ${data.email} for any additional questions and/ or clarifications you may need about the project.

##### License

[This application uses the **${data.license}** found here](./LICENSE).

**[This README.md file generated with my NODE.js README Generator app.](https://github.com/etorres-revature/NODEjs_README.md_Generator)**
`;
}


//creating an export of this file so that other files have acces to it through "require"
module.exports = generateMarkDown