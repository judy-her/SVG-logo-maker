const Triangle = require('../lib/triangle.js');

//test suite for triangle with blue fill color
describe('Triangle', () => {
  describe('render triangle', () => {
    it('should render a triangle with blue fill color', () => {
      const points = '150, 18 244, 182 56, 182';
      const shapeColor = 'blue';
      const triangle = new Triangle(points, shapeColor);

      expect(triangle.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="blue"/>'
      );
    });
  });
});
