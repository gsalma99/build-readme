// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const { writeFile } = require("fs").promises;
const generateMarkdown = require("./utils/generateMarkdown");

const promptUser = () => {
    return inquirer.prompt([
      {
          type: "title",
          name: "title",
          message: "What is the name of your project?",
        },
      {
        type: "input",
        name: "name",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "description",
        message: "What does your project do?",
      },
      {
        type: "input",
        name: "installation",
        message: "What did you need to install before working on the project?",
      },
      {
        type: "input",
        name: "usage",
        message: "How does your project work?",
      },
      {
        type: "list",
        name: "licence",
        message: "What licence did you need?",
        choices: ['MIT', 'APACHE', 'GNU', 'NONE']
      },
      {
        type: "input",
        name: "contributors",
        message: "Were there any other programmers contributing to this project?",
      },
      {
        type: "input",
        name: "tests",
        message: "Did you run any tests?",
      },
      {
        type: "input",
        name: "questions",
        message: "What is your github username?",
        message: "What is your email?"
      },
    ]);
  };

function writeToFile(fileName, data) {}

const init = () => {
    promptUser()
      .then((answers) => writeFile('./readme.md', generateMarkdown(answers)))
      .then(() => console.log('Successfully wrote to readme.md'))
      .catch((err) => console.error(err));
  };

init();