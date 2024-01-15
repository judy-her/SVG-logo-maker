const SVGElement = require('../lib/svgElement.js');

class Circle extends SVGElement {
  constructor(radius) {
    super(radius * 2, radius * 2);
    this.radius = radius;
  }
  render() {
    return `<circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" fill="[COLOR]" />`;
  }
}

module.exports = Circle;
