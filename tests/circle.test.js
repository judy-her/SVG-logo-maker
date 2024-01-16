const Circle = require('../lib/circle.js');

//test suite to render circle shape with green background color
describe('Circle', () => {
  describe('render circle', () => {
    it('Should render a circle  with green bg', () => {
      const radius = 10;
      const color = 'green';
      const newCircle = new Circle(radius, color);
      const result = `<circle cx="${radius}" cy="${radius}" r="${radius}" fill="${color}"/>`;
      expect(newCircle.render()).toEqual(result);
    });
  });
});
