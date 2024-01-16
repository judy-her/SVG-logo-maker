const SVGElement = require('../lib/svgElement.js');

class Circle extends SVGElement {
  constructor(radius, shapeColor) {
    super(radius * 2, radius * 2);
    this.radius = radius;
    this.shapeColor = shapeColor;
  }
  render() {
    return `<circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" fill="${this.shapeColor}"/>`;
  }
}

module.exports = Circle;
