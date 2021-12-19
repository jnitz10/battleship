
const makeShip = (shipType) => {
  let shipLengths = {
    'carrier' : 5,
    'battleship' : 4,
    'cruiser' : 3,
    'submarine' : 3,
    'destroyer' : 2,
  };
  var hits = Array.from({length: shipLengths[shipType]}, (_, i) => 1);

  var sunk = false;

  const hit = (n) => {
    hits[n] = 0;
    if (getHits().reduce(_add, 0) == 0) {
      sunk = true;
    }
  };

  const getHits = () => {
    return hits;
  };

  function _add (accumulator, n) {
    return accumulator + n;
  }

  var isSunk = () => {
    if (sunk) {
      return true;
    } else {
      return false;
    }
  };

    return { getHits, hit, isSunk };
};

exports.makeShip = makeShip;
