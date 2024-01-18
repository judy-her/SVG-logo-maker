const SVGElement = require('../lib/svgElement.js');

class Circle extends SVGElement {
  constructor(shapeColor, text, textColor, fontSize, textX, textY) {
    super();
    // this.radius = radius;
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
    this.textX = textX || '50%';
    this.textY = textY || '50%';
    this.fontSize = fontSize || '70';
  }
  render() {
    return `<circle cx="150" cy="100" r="100" fill="${this.shapeColor}"/>`;
  }
}

module.exports = Circle;
