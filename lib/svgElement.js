class SVGElement {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  render() {
    // To be implemented by child classes
    throw new Error('Child class must implement render() method.');
  }
  renderInner() {
    return `<svg width="${this.width}" height="${
      this.height
    }">${this.render()}</svg>`;
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

class Square extends SVGElement {
  constructor() {}
}

class Triangle extends SVGElement {
  constructor() {}
}
