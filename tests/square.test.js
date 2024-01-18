const Square = require('../lib/square.js');

//test suite for square
describe('Square', () => {
  describe('render square', () => {
    it('should render a green square', () => {
      const points = '0,0 100,0 100,100 0,100';
      const shapeColor = 'green';
      const newSquare = new Square(points, shapeColor);

      expect(newSquare.render()).toEqual(
        '<polygon points="0,0 100,0 100,100 0,100" fill="green"/>'
      );
    });
  });
});
