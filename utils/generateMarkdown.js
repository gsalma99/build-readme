// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license==='NONE') {
    return ""
  
  } else {
    return "-[licence](#licence)"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log('===', license)
  if (license ==='NONE') {
    return "";
  } else {
    return `## Licence 
   this project is licenced under the ${license} licence`

  } 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, name, description, installation, usage, licence, contributors, tests, questions, portfolio}) {
  console.log()
  return `# ${title}

  ## Description
  ${description}

  ## Name 
  ${name}

  ## Table of Contents
  -[Installation](#installation)
  -[Usage](#usage)
  ${renderLicenseLink(licence)}
  -[Credits](#credits)
  -[Tests](#test)
  -[Questions](#questions)
  -[Portfolio](#portfolio)

  ## Installation
  ${installation}

  ## Usage 
  ${usage}

  ## Credits
  ${contributors}

  ## Tests 
  ${tests}

  ## Questions
  ${questions}

  ##Portfolio
  ${portfolio}
 
  ${renderLicenseSection(licence)}

`;
}

module.exports = generateMarkdown;
