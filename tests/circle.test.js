const Circle = require('../lib/circle.js');

//test suite to render circle shape with green background color
describe('Circle', () => {
  describe('render circle', () => {
    it('Should render a circle  with green bg', () => {
      const radius = 10;
      const shapeColor = 'green';
      const textColor = 'grey';
      const text = 'Hello';
      const newCircle = new Circle(radius, shapeColor, text, textColor);
      const result = `<circle cx="${radius}" cy="${radius}" r="${radius}" fill="${shapeColor}"/> <text x="50%" y="50%" alignment-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="70">${text}</text>`;
      expect(newCircle.render()).toEqual(result);
    });
  });
});
