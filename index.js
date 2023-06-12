// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
// const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
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
      if (!answer.includes == "@") {
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

handleQuestions();

function handleQuestions() {
  const userInfo = await inquirer.prompt(questions);
  const newMD = generateMarkdown(userInfo);
  handleGenerateFile("test1.md", newMD);
}
// console.log(data);

function handleGenerateFile(title, newMarkdown) {
  fs.writeFilte(title, newMarkdown, (err) => {
    if (err) console.log("readme err");
  });
}
// then(
//   (response) => generateMarkdown(response)
// fs.writeFile("Generated_README.md", JSON.stringify(response), (err) => {
//   if (err) console.log("readme err");

// })
// );
//   .then(
//     const newMarkdown =
//     fs.writeFile("Generated_README.md", , (err) => {
//       if (err) console.log("readme err");
//     })
//   );

// import generateMarkdown from "./utils/generateMarkdown.js";
// const newMarkdown = generateMarkdown;

// fs.writeFile("Generated_README.md", newMarkdown, (err) => {
//   if (err) console.log("readme err");
// });

//use github api to pull repo name from repo url?

// TODO: Create a function to write README file

//.then((response) =)
// fs.writeFile("Generated_README.md", rmTemplate, (err) => {
//   if (err) console.log("readme err");
// });
// );

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
