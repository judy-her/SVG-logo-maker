//import shapes

const Square = require('./lib/square.js');
const Circle = require('./lib/circle.js');
const Triangle = require('./lib/triangle.js');

function renderShape(
  shape,
  shapeColor,
  text,
  textColor,
  fontSize,
  textX,
  textY
) {
  if (shape === 'square') {
    const square = new Square(
      '0,0 300,0 300,200 0,200',
      shapeColor,
      text,
      textColor,
      fontSize,
      textX,
      textY
    );
    return square.render();
  }
  if (shape === 'triangle') {
    const triangle = new Triangle(
      '150, 18 244, 182 56, 182',
      shapeColor,
      text,
      textColor,
      fontSize,
      textX,
      textY
    );
    return triangle.render();
  }
  if (shape === 'circle') {
    const circle = new Circle(
      shapeColor,
      text,
      textColor,
      fontSize,
      textX,
      textY
    );
    return circle.render();
  } else {
    return '';
  }
}

const generateSVG = ({
  shape,
  shapeColor,
  text,
  textColor,
  fontSize,
  textX,
  textY,
}) => {
  let defaultFontSize, defaultTextX, defaultTextY;
  //default values per shape type
  switch (shape) {
    case 'circle':
      defaultFontSize = '70';
      defaultTextX = '50%';
      defaultTextY = '50%';
      break;
    case 'square':
      defaultFontSize = '100';
      defaultTextX = '45%';
      defaultTextY = '43%';
      break;
    case 'triangle':
      defaultFontSize = '70';
      defaultTextX = '50%';
      defaultTextY = '70%';
      break;
    default:
  }

  const finalFontSize = fontSize || defaultFontSize;
  const finalTextX = textX || defaultTextX;
  const finalTextY = textY || defaultTextY;

  const shapeSvg = renderShape(
    shape,
    shapeColor,
    text,
    textColor,
    finalFontSize,
    finalTextX,
    finalTextY
  );

  return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">

  <!-- shape selected from prompt -->
  ${shapeSvg}
  
  <text x="${finalTextX}" y="${finalTextY}" alignment-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="${finalFontSize}">
  ${text}
</text>

</svg>`;
};

module.exports = generateSVG;
