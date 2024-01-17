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
    this.fontSize = fontSize || '45';
  }
  render() {
    return `<polygon points="${this.points}" fill="${this.shapeColor}"/> <text x="${this.textX}" y="${this.textY}" alignment-baseline="middle" text-anchor="middle" fill="${this.textColor}" font-size="${this.fontSize}">${this.text}</text>`;
  }
}

module.exports = Triangle;
