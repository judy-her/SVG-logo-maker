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

  <!-- shape selected from prompt -->
  ${shapeSvg}

  <text x="${textX}" y="${textY}" alignment-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="${fontSize}">
  ${text}
</text>

</svg>`;
};

module.exports = generateSVG;
