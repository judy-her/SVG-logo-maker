//import shapes
const { Circle } = require('./lib/circle.js');
const { Square } = require('./lib/square.js');
const { Triangle } = require('./lib/triangle.js');

//render shape
const renderShape = (
  shape,
  shapeColor,
  text,
  textColor,
  fontSize,
  textX,
  textY
) => {
  switch (shape) {
    case 'circle':
      const circle = new Circle(
        shapeColor,
        text,
        textColor,
        fontSize,
        textX,
        textY
      );
      return circle.render();
    case 'square':
      const square = new Square(
        shapeColor,
        text,
        textColor,
        fontSize,
        textX,
        textY
      );
      return square.render();
    case 'triangle':
      const triangle = new Triangle(
        shapeColor,
        text,
        textColor,
        fontSize,
        textX,
        textY
      );
      return triangle.render();
    default:
      return '';
  }
};

const generateSVG = ({
  shape,
  shapeColor,
  text,
  textColor,
  fontSize,
  textX,
  textY,
}) => {
  const shapeSvg = renderShape(
    shape,
    shapeColor,
    text,
    textColor,
    fontSize,
    textX,
    textY
  );

  return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">

  //shape selected from prompt
  
  <text x="${textX}" y="${textY}" alignment-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="${fontSize}">
  ${text}
</text>

</svg>`;
};
