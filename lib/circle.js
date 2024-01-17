const SVGElement = require('../lib/svgElement.js');

class Circle extends SVGElement {
  constructor(shapeColor, text, textColor, fontSize, textX, textY) {
    super();
    // this.radius = radius;
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
    this.textX = textX || '50%';
    this.textY = textY || '50%';
    this.fontSize = fontSize || '70';
  }
  render() {
    return `<circle cx="150" cy="100" r="100" fill="${this.shapeColor}"/> <text x="${this.textX}" y="${this.textY}" alignment-baseline="middle" text-anchor="middle" fill="${this.textColor}" font-size="${this.fontSize}">${this.text}</text>`;
    // return `<circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" fill="${this.shapeColor}"/> <text x="50%" y="50%" alignment-baseline="middle" text-anchor="middle" fill="${this.textColor}" font-size="70">${this.text}</text>`;
  }
}

module.exports = Circle;
