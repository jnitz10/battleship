import { makeShip } from "./Ship";

const makeBoard = () => {
  let board = Array.from({length: 64}, (_, i) => i); 

  let ships = {};
  let shipLocations = {};
  let misses = [];
  let usedCoords = [];

  function getMisses() {
    return misses;
  }

  function overlapTest(array1, array2) {
    if (array1.filter(value => array2.includes(value)).length > 0) {
      return true
    } else {
      return false
    }
  }

  const placeShip = ( shipType, coordList ) => {
    if (overlapTest(coordList, usedCoords)) {
      return false;
    } else {
      ships[`${shipType}`] = makeShip(shipType);
      shipLocations[`${shipType}`] = coordList;
      usedCoords.push(...coordList);

    }
  }
  
  const receiveAttack = (attackCoord) => {
    if (usedCoords.includes(attackCoord)) {
      for (const key in shipLocations) {
        if (shipLocations[key].includes(attackCoord)) {
          ships[key].hit(shipLocations[key].indexOf(attackCoord))
        }
      }
    } else {
      misses.push(attackCoord);
    }
  }

  const allSunk = () => {
    for (const key in ships) {
      if (ships[key].isSunk() === false) {
        return false;
      }
    }
    return true;
  }
  return { ships, shipLocations, placeShip, receiveAttack, getMisses, allSunk, usedCoords }
}

exports.makeBoard = makeBoard;