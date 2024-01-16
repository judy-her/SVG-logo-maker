const SVGElement = require('../lib/svgElement.js');

class Square extends SVGElement {
  constructor(points, color) {
    super();
    this.points = points || '0,0 100,0 100,100 0,100';
    this.color = color;
  }
  render() {
    return `<polygon points="${this.points}" fill="${this.color}" />`;
  }
}

module.exports = Square;
