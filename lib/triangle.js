const SVGElement = require('../lib/svgElement.js');

class Triangle extends SVGElement {
  constructor(points, shapeColor, text, textColor, fontSize, textX, textY) {
    super(300, 200);
    this.points = points || '150, 18 244, 182 56, 182';
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
    this.textX = textX || '50%';
    this.textY = textY || '70%';
    this.fontSize = fontSize || '70';
  }
  render() {
    return `<polygon points="${this.points}" fill="${this.shapeColor}"/> `;
  }
}

module.exports = Triangle;
