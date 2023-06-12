//Required packages
const inquirer = require("inquirer");
const fs = require("fs");
const genMark = require("./utils/generateMarkdown");

// Array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your project's title?",
    name: "projectTitle",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Your project needs a title.");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "Please enter a short description of your project:",
    name: "elevPitch",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Your project needs at least a short description.");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "Would you like to add a longer description?",
    name: "whatIsIt",
  },
  {
    type: "input",
    message: "Please enter the first installation instruction (out of four)",
    name: "instruction1",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log(
          "Your project needs at least one installation step."
        );
      }
      return true;
    },
  },
  {
    type: "input",
    message: "Please enter the second installation instruction (out of four)",
    name: "instruction2",
  },
  {
    type: "input",
    message: "Please enter the third installation instruction (out of four)",
    name: "instruction3",
  },
  {
    type: "input",
    message: "Please enter the fourth installation instruction (out of four)",
    name: "instruction4",
  },
  {
    type: "input",
    message: "Who did you build this project for? Who will find it useful?",
    name: "useCase",
  },
  {
    type: "input",
    message:
      "Who participated in building this project? (ex. @JohnSmith, @JohnAdams, @JohnHancock)",
    name: "credits",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("You need to credit at least one developer.");
      }
      if (!answer.includes("@")) {
        return console.log(
          "Please include the @ sign at the beginning of each developer's name"
        );
      }
      return true;
    },
  },
  {
    type: "input",
    message:
      "If someone would like to contribute to your project, who should they reach out to?",
    name: "repoManager",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("You must designate a contact.");
      }
      return true;
    },
  },
  {
    type: "list",
    message: "Which license would you like to add to your project?",
    name: "licenseName",
    choices: ["MIT (recommended)", "GNU GPLv3", "GNU GPLv2", "Apache", "ISC"],
  },
  {
    type: "input",
    message: "What is Your GitHub User Name?",
    name: "gitUser",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("You must enter a valid username.");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "What email address can users use to contact you?",
    name: "gitEmail",
    validate: function (answer) {
      if (!answer.includes("@")) {
        return console.log("You must enter a valid email address.");
      }
      return true;
    },
  },
  {
    type: "input",
    message:
      "Enter some alt text for the first screenshot (this helps aid screen-readers):",
    name: "altText1",
  },
  {
    type: "input",
    message:
      "Enter some alt text for the second screenshot (this helps aid screen-readers):",
    name: "altText2",
  },
];

// Writes README file after receiving markdown from generateMarkdown.js
function handleGenerateFile(title, newMarkdown) {
  fs.writeFile(title, newMarkdown, (err) => {
    if (err) console.log("readme err");
  });
}

// Initializes app, starts question iteration
async function init() {
  const userInfo = await inquirer.prompt(questions);

  //uses user-selected license name to pull in other values from genMark js file
  const license = userInfo.licenseName;
  const licenseBadge = genMark.renderLicenseBadge(license);
  const licenseLink = genMark.renderLicenseLink(license);
  const licenseSection = genMark.renderLicenseSection(
    license,
    userInfo.gitUser
  );

  //pushes selected license information to new array to pass to generate function
  const licenseArr = [];
  licenseArr.push(licenseBadge);
  licenseArr.push(licenseLink);
  licenseArr.push(licenseSection);
  //   console.log(licenseArr);

  //Generate final README file
  let newMD = genMark.handleGenerate(userInfo, licenseArr);
  handleGenerateFile(userInfo.projectTitle + "_README.md", newMD);
}

// Function call to initialize app
init();

//Dev Directions:
//validate github handle against API, pull github user info and correct repo name/live pages link
//select which sections to include at beginning of application
//validate correct file naming of screenshot files
