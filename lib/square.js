const SVGElement = require('../lib/svgElement.js');

class Square extends SVGElement {
  constructor(points, shapeColor, text, textColor, fontSize, textX, textY) {
    super(); //calling parent w/super
    this.points = points || '0,0 100,0 100,100 0,100';
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
    this.textX = textX || '50%';
    this.textY = textY || '50%';
    this.fontSize = fontSize || '70';
  }
  render() {
    return `<polygon points="${this.points}" fill="${this.shapeColor}" /> <text x="${this.textX}" y="${this.textY}" alignment-baseline="middle" text-anchor="middle" fill="${this.textColor}" font-size="${this.fontSize}">
    ${this.text}
 </text>`;
  }
}

module.exports = Square;
//textColor
//shapeColor
