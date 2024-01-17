//packages for application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
const generateSVG = require('./generateSVG.js');

//used writeFileSync method
const questions = () => {
  return inquirer.prompt([
    {
      name: 'shape',
      type: 'list',
      message: 'What shape will your svg be? ',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      name: 'shapeColor',
      type: 'input',
      message:
        'What color will your shape be? Type color name or hexadecimal number: ',
    },
    {
      name: 'text',
      type: 'input',
      message: 'What three characters do you want the text to be in your svg ?',
    },
    {
      name: 'textColor',
      type: 'input',
      message:
        'What color do you want your text to be? Type color name or hexadecimal number: ',
    },

    {
      name: 'width',
      type: 'input',
      message: 'What should the width be?',
    },
    {
      name: 'height',
      type: 'input',
      message: 'What should the height be?',
    },
  ]);
};

// write file
const init = () => {
  questions()
    .then((answers) => writeFile('logo.svg', generateSVG(answers)))
    .then(() => console.log('Generated logo.svg'))
    .catch((err) => console.log(err));
};

init();
