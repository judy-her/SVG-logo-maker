const SVGElement = require('../lib/svgElement.js');

class Square extends SVGElement {
  constructor(points, shapeColor, text, textColor, fontSize, textX, textY) {
    super(300, 200); //calling parent w/super
    this.points = points || '0,0 300,0 300,200 0,200';
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
    this.textX = textX || '45%';
    this.textY = textY || '43%';
    this.fontSize = fontSize || '100';
  }
  render() {
    return `<polygon points="${this.points}" fill="${this.shapeColor}" />
 `;
  }
}

module.exports = Square;
//textColor
//shapeColor
