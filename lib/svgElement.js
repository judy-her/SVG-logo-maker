class SVGElement {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  render() {
    return `<svg width="${this.width}" height="${
      this.height
    }">${this.renderInner()}</svg>`;
  }
  renderInner() {
    // To be implemented by child classes
    throw new Error('Child class must implement renderInner() method.');
  }
}

module.exports = SVGElement;
