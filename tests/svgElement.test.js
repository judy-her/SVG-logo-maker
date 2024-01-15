const SVGElement = require('../lib/svgElement.js');

//testing suite for SVGElement to throw error when renderInner() is called directly

describe('SVGElement', () => {
  describe('render', () => {
    it('Should throw error message when calling render directly', () => {
      const newSVGElem = new SVGElement();
      const err = new Error('Child class must implement render() method.');
      expect(newSVGElem.render).toThrow(err);
    });
  });
});
