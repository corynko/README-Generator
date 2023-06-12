// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // console.log("here!");
  const newMarkdown = `# ${data.projectTitle}
  
  ${data.elevPitch}
  
  ${data.licenseBadge}
  
  ## Description
  
  ${data.whatIsIt}
  
  # Table of Contents
  
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributors](#contributors)
  5. [Tests](#tests)
  6. [Questions](#questions)
  
  ## Installation
  
      * ${data.instruction1}
      * ${data.instruction2}
      * ${data.instruction3}
      * ${data.instruction4}
  
  ## Usage
  
  ${data.useCase}
  
      ![${data.altText1}](./assets/images/image_1)
      ![${data.altText2}](./assets/images/image_2)
  
  ## License
  
  ${data.licenseText}
  
  ## Contributors
  
  This project was built by ${data.credits}. If you would like to contribute to this project, please reach out to ${data.repoManager}
  
  ## Tests
  
  ## Questions
  
  Please don't hesitate to reach out to me at ${data.gitEmail} or open an issue on my repository (${data.gitUser}) with any questions or bugs.
  
  - made using @corynko's readme generator -`;

  return newMarkdown;
}

module.exports = generateMarkdown;
