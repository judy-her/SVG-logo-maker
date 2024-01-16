const SVGElement = require('../lib/svgElement.js');

class Circle extends SVGElement {
  constructor(radius, shapeColor, text, textColor) {
    super(radius * 2, radius * 2);
    this.radius = radius;
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
  }
  render() {
    return `<circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" fill="${this.shapeColor}"/> <text x="50%" y="50%" alignment-baseline="middle" text-anchor="middle" fill="${this.textColor}" font-size="70">${this.text}</text>`;
  }
}

module.exports = Circle;
