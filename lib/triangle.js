const SVGElement = require('../lib/svgElement.js');

class Triangle extends SVGElement {
  constructor(points, shapeColor, text, textColor) {
    super();
    this.points = points || '150, 18 244, 182 56, 182';
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
  }
  render() {
    return `<polygon points="${this.points}" fill="${this.shapeColor}"/> <text x="50%" y="70%" alignment-baseline="middle" text-anchor="middle" fill="${this.textColor}" font-size="45">${this.text}</text>`;
  }
}

module.exports = Triangle;
