const Square = require('../lib/square.js');

//test suite for square with blue background
describe('Square', () => {
  describe('render square', () => {
    it('should render a square with blue bg', () => {
      const points = '0,0 100,0 100,100 0,100';
      const color = 'blue';
      const newSquare = new Square(points, color);
      const result = `<polygon points="${points}" fill="${color}" />`;
      expect(newSquare.render()).toEqual(result);
    });
  });
});
