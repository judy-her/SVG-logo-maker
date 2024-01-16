const SVGElement = require('../lib/svgElement.js');

//testing suite for SVGElement to throw error when renderInner() is called directly
//NOTE Passed
describe('SVGElement', () => {
  describe('render', () => {
    it('Should throw error message when calling render directly', () => {
      const newSVGElem = new SVGElement();
      const err = new Error('Child class must implement render() method.');
      expect(newSVGElem.render).toThrow(err);
    });
  });
});
//testing width and height
//NOTE Passed
// describe('SVGElement', () => {
//   describe('render width and height', () => {
//     it('should render any given width and height', () => {
//       const width = 300;
//       const height = 200;
//       const newSize = new SVGElement(width, height);
//       const result = `<svg width="${width}" height="${height}"></svg>`;
//       expect(newSize.renderSize()).toEqual(result);
//     });
//   });
// });

// testing color
//NOTE Passed
// describe('SVGElement', () => {
//   describe('color', () => {
//     it('should render color in fill attribute', () => {
//       const color = 'blue';
//       const newColor = new SVGElement(300, 200);
//       newColor.setColor(color);
//       const result = `<svg width="300" height="200" fill="${color}"></svg>`;
//       expect(newColor.renderSize()).toEqual(result);
//     });
//   });
// });

// describe('SVGElement', () => {
//   describe('renderInner', () => {
//     it('Should render fill color when color is set', () => {
//       const shape = new SVGElement(100, 100);
//       shape.setColor('blue');
//       const result = `<svg width="100" height="100" fill="blue"></svg>`;
//       expect(shape.renderInner()).toEqual(result);
//     });
//   });
// });
