// TODO: Include packages needed for this application
const inquirer = require('inquirer').default; 
const { writeFile } = require('fs').promises;

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

init();
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is your project about?',
      },
      {
        type: 'input',
        name: 'toc',
        message: 'List Table of contents?',
      },
      {
        type: 'input',
        name: 'instructions',
        message: 'How did you Install?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How does it work?',
      },
      {
        type: 'input',
        name: 'license',
        message: 'What kind of license did you choose?',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Where there any other programmers assisting?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Where there any test required?',
      },
      {
        type: 'input',
        name: 'questions ',
        message: 'What is your email?',
        message: 'What is your GitHub username?'
      },
    ]);
  };