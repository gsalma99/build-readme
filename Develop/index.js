// TODO: Include packages needed for this application
const inquirer = require('inquirer').default; 
const { writeFile } = require('fs').promises;

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// Function call to initialize app
init();
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      },
      {
        type: 'input',
        name: 'title',
        message: 'Title of project?',
      },
      {
        type: 'input',
        name: 'hobby',
        message: 'What is your your project?',
      },
      {
        type: 'input',
        name: 'food',
        message: 'What is your favorite food?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
      },
      {
        type: 'input',
        name: 'linkedin',
        message: 'Enter your LinkedIn URL.',
      },
    ]);
  };