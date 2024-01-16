class SVGElement {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  render() {
    // To be implemented by child classes
    throw new Error('Child class must implement render() method.');
  }
  // renderSize() {
  //   //return width and height
  //   const colorFill = this.fill ? `fill="${this.fill}"` : '';
  //   return `<svg width="${this.width}" height="${this.height}" ${colorFill}></svg>`;
  // }

  // setColor(color) {
  //   this.fill = color;
  // }
}

module.exports = SVGElement;

// TODO create child classes for shapes: circle, square, trianle

// class Triangle extends SVGElement {
//   constructor() {}
//   render() {
//     return `<polygon points="150, 18 244, 182 56, 182" fill="[COLOR]"/>`;
//   }
// }

// class Square extends SVGElement {
//   constructor() {}
//   render() {}
// }
