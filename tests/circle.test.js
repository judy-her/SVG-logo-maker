const Circle = require('../lib/circle.js');

//test suite to render circle shape
describe('Circle', () => {
  describe('render circle', () => {
    it('Should render a circle', () => {
      const radius = 10;
      const newCircle = new Circle(radius);
      const result = `<circle cx="${radius}" cy="${radius}" r="${radius}"/>`;
      expect(newCircle.render()).toEqual(result);
    });
  });
});
