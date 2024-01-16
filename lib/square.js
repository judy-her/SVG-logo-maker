const SVGElement = require('../lib/svgElement.js');

class Square extends SVGElement {
  constructor(points, shapeColor, text, textColor) {
    super(); //calling parent w/super
    this.points = points || '0,0 100,0 100,100 0,100';
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
  }
  render() {
    return `<polygon points="${this.points}" fill="${this.shapeColor}" /> <text x="50%" y="50%" alignment-baseline="middle" text-anchor="middle" fill="${this.textColor}" font-size="70">
    ${this.text}
 </text>`;
  }
}

module.exports = Square;
//textColor
//shapeColor
