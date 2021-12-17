const Gameboard = require('./../src/Gameboard');
import makeShip from './../src/Ship'


describe('testing the place ship function', () => {
  const board = Gameboard.makeBoard()
  board.placeShip("submarine", [0, 1, 2])
  test('ships are added to ship list', () => {
    expect(Object.keys(board.ships).length > 0).toBeTruthy();
  });
  test('ships are placed on the proper coordinates', () => {
    expect(board.shipLocations['submarine']).toStrictEqual([0, 1, 2]);
  });
  test('ships cannot overlap', () => {
    expect(board.placeShip("destroyer", [2, 3])).toBeFalsy();
  });

})

describe('testing receiveAttack function', () => {
  const board = Gameboard.makeBoard()
  board.placeShip("submarine", [0, 1, 2]);
  test('detects misses', () => {
    board.receiveAttack(4)
    expect(board.getMisses().includes(4)).toBeTruthy();
  });
  test('detects hits', () => {
    board.receiveAttack(2);
    expect(board.ships["submarine"].getHits()[2]).toBe(0);
  });

})

describe('testing shipsSunk function', () => {
  const board = Gameboard.makeBoard();
  board.placeShip("destroyer", [0, 1]);
  test('will not return true if unsunk ships', () => {
    expect(board.allSunk()).toBeFalsy();
  });
  test('will return true if ships are sunk', () => {
    board.receiveAttack(0)
    board.receiveAttack(1)
    expect(board.allSunk()).toBeTruthy();
  })
  
});