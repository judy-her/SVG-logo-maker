const Triangle = require('../lib/triangle.js');

//test suite for triangle with purple bg
describe('Triangle', () => {
  describe('render triangle', () => {
    it('should render a triangle with bg color,text,and text color', () => {
      const points = '150, 18 244, 182 56, 182';
      const shapeColor = 'purple';
      const textColor = 'white';
      const text = 'Bye';
      const newTriangle = new Triangle(points, shapeColor, text, textColor);
      const result = `<polygon points="${points}" fill="${shapeColor}"/> <text x="50%" y="70%" alignment-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="45">${text}</text>`;
      expect(newTriangle.render()).toEqual(result);
    });
  });
});
