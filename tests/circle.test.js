const Circle = require('../lib/circle.js');

//test suite to render circle shape
describe('Circle', () => {
  describe('render circle', () => {
    it('Should render a purple circle', () => {
      const shapeColor = 'purple';
      const newCircle = new Circle(shapeColor);
      expect(newCircle.render()).toEqual(
        '<circle cx="150" cy="100" r="100" fill="purple"/>'
      );
    });
  });
});
