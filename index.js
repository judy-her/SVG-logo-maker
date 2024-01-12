//packages for application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;

//used writeFileSync method
const questions = () => {
  return inquirer.prompt([
    {
      name: 'text',
      type: 'input',
      message: 'What three characters should be in your svg?',
    },
    {
      name: 'color',
      type: 'input',
      message: 'What color will your svg be? Type color name or hexadecimal: ',
    },
    {
      name: 'shape',
      type: 'list',
      message: 'What shape will your svg be? ',
      choices: ['cirlce', 'triangle', 'square'],
    },
  ]);
};

//write file
const init = () => {
  questions()
    .then((answers) => writeFile('logo.svg', generateSVG(answers)))
    .then(() => console.log('SVG succesfully created'))
    .catch((err) => console.log(err));
};

init();
