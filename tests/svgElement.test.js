const SVGElement = require('../lib/svgElement.js');

//testing suite for SVGElement to throw error when renderInner() is called directly

describe('SVGElement', () => {
  describe('renderInner', () => {
    it('Should throw error message when calling directly', () => {
      const newSVGElem = new SVGElement();
      const err = new Error('Child class must implement renderInner() method.');
      expect(newSVGElem.renderInner).toThrow(err);
    });
  });
});
