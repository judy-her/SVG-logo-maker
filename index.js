//packages for application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;

//used writeFileSync method
const questions = () => {
  return inquirer.prompt([
    {
      name: 'shape',
      type: 'input',
      message: 'What shape would you like? Choose between',
    },
  ]);
};
