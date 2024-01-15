class SVGElement {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.fill = '';
  }
  render() {
    // To be implemented by child classes
    throw new Error('Child class must implement render() method.');
  }
  renderInner() {
    //check fill is set
    const colorFill = this.fill ? ` fill =${this.fill}` : '';
    return `<svg width="${this.width}" height="${
      this.height
    }" ${colorFill}>${this.render()}</svg>`;
  }

  setColor(color) {
    this.fill = color;
  }
}

module.exports = SVGElement;

// TODO create child classes for shapes: circle, square, trianle
// class Circle extends SVGElement {
//   constructor(radius) {
//     super(radius * 2, radius * 2);
//     this.radius = radius;
//   }
//   renderInner() {
//     return `<circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" fill="[COLOR]" />`;
//   }
// }
class Triangle extends SVGElement {
  constructor() {}
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="[COLOR]"/>`;
  }
}

class Square extends SVGElement {
  constructor() {}
  render() {}
}
