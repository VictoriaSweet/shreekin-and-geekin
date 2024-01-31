
const inquirer = require('inquirer');
const fs = require('fs');

const questions = [];


function writeToFile(fileName, data) {}


function init() {}

init();
const generateHTML = ({ name, description, installation, usage,testing, license }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <header class="p-5 mb-4 header bg-light">
    <div class="container">
      <h1 class="display-4">Hi! My name is ${name}</h1>
      <p class="lead">My project is ${description}.</p>
      <h3>Example heading <span class="badge bg-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">You are able to start installation for this application by ${installation}</li>
        <p class="lead">the use for this application is ${usage}.</p>
        <p class="lead">The testing applications I have used were ${testing}.</p>
        <p class="lead">The license I have chosen was ${license}.</p>
      </ul>
    </div>
  </header>
</body>
</html>`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your project name?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'what is the description of your title?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'instructions for installing the application',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'any usage information on how to start the application?',
    },
    {
      type: 'input',
      name: 'Contributions',
      message: 'Enter the information of who contributed to the repo',
    },
    {
      type: 'input',
      name: 'testing',
      message: 'Enter your applications used for testing.',
    },
      {
        type: 'input',
        name: 'license',
        message: 'Enter your chosen license',
      },

  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });
