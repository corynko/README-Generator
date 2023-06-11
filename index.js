// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
inquirer;
const questions = [];

//use github api to pull repo name from repo url?

// TODO: Create a function to write README file
const rmTemplate = `
# ${projectTitle}

${elevPitch}

## Description

${whatIsIt}

# Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Screenshots](#screenshots)
4. [License](#license)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation

    * ${instruction1}
    * ${instruction2}
    * ${instruction3}

## Usage

${deployedUrl}

## Screenshots

    ![${altText1}](./assets/images/image_1)
    ![${altText2}](./assets/images/image_2)

## License

${licenseText}

## Contributors

This project was built by ${credits}.

## Tests

## Questions

Please don't hesitate to reach out to ${gitUser} or open an issue on the project repository with any questions or bugs.

- made using @corynko's readme generator -`;

fs.writeFile("Generated_README.md", rmTemplate, (err) => {
  if (err) console.log("readme err");
});

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
