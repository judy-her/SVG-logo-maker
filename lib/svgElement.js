class SVGElement {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  render() {
    // To be implemented by child classes
    throw new Error('Child class must implement render() method.');
  }
}

module.exports = SVGElement;
