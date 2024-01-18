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
      message: 'Shape Color: Type color name or hexadecimal number: ',
    },
    {
      name: 'text',
      type: 'input',
      message: 'What three characters do you want the text to be in your svg ?',
    },
    {
      name: 'textColor',
      type: 'input',
      message: 'Text Color: Type color name or hexadecimal number: ',
    },
  ]);
};

// write file
const init = () => {
  questions()
    .then((answers) => {
      const svgContent = generateSVG({
        shape: answers.shape,
        shapeColor: answers.shapeColor,
        text: answers.text,
        textColor: answers.textColor,
        fontSize: answers.fontSize,
        textX: answers.textX,
        textY: answers.textY,
      });
      return writeFile('logo.svg', svgContent);
    })
    .then(() => console.log('Generated logo.svg'))
    .catch((err) => console.log(err));
};

init();
