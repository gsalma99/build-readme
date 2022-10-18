// TODO: Include packages needed for this application
const {prompt} = require('inquirer')
const  fs  = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [
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
    name: 'questions',
    message: 'What is your email?',
    message: 'What is your GitHub username?'
  },
]

// TODO: Create a function to write README file
function createReadme(fileName, data) {
  fs.writeFile('./dist/' + fileName, generateMarkdown(data), err => console.log(err))
}

const promptUser = () => {
    return prompt(questions).then(answers => {
      console.log(answers);
      createReadme('README.md', answers)
    })
  };
  promptUser ()