const Ship = require('./../src/Ship')

test('test if hit function properly logs hit position', () => {
  var testShip = Ship.makeShip('carrier');
  testShip.hit(2)
  expect(testShip.getHits()[2]).toBe(0);
  expect(testShip.getHits()[1]).toBe(1);
});

test('test if isSunk function is working properly', () => {
  var testShip = Ship.makeShip('cruiser');
  testShip.hit(0);
  testShip.hit(1);
  expect(testShip.isSunk()).toBeFalsy();
  testShip.hit(2);
  expect(testShip.isSunk()).toBeTruthy();
})