const Square = require('../lib/square.js');

//test suite for square with blue background
describe('Square', () => {
  describe('render square', () => {
    it('should render a square with blue bg', () => {
      const points = '0,0 100,0 100,100 0,100';
      const shapeColor = 'blue';
      const textColor = 'white';
      const text = 'SVG';
      //IMPORTANTthese passed in new Square must be in order!
      const newSquare = new Square(points, shapeColor, text, textColor);
      const result = `<polygon points="${points}" fill="${shapeColor}" /> <text x="50%" y="50%" alignment-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="70">
    ${text}
 </text>`;

      expect(newSquare.render()).toEqual(result);
    });
  });
});
