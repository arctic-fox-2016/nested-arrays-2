// Release 0 : Tic-tac-toe Revisited - Populating a Board

// ------- RELEASE 0 ----------

function tic_tac_toe_board() {
  var xo_random = ["X","O","X","O","X","O","X","O","X"]
  //write your code here

  // 1. Create board
  var board = [[], [], []];

  // 2. Masukin "X" "O" ke dalam board
  for (var i = 0; i < 9; i++) {
    board[Math.floor(i / 3)][i % 3] = xo_random[i];
  }

  return board;
}

console.log(tic_tac_toe_board()) // => make a random tic tic board


// ---- RELEASE 1 ---------
var roster = [["Number", "Name", "Position", "Points per Game"],
["12","Joe Schmo","Center",[14, 32, 7, 0, 23] ],
["9", "Ms. Buckets ", "Point Guard", [19, 0, 11, 22, 0] ],
["31", "Harvey Kay", "Shooting Guard", [0, 30, 16, 0, 25] ],
["7", "Sally Talls", "Power Forward ", [18, 29, 26, 31, 19] ],
["22", "MK DiBoux ", "Small Forward ", [11, 0, 23, 17, 0] ]]

// [[roster[0][0], roster[1][0]], [roster[0][1], roster[1][1]],...


function convert_roster_format(nestedArray) {
  // your convert code here
  var objRoster = [];
  var tempObject = {};

  for (var row = 1; row < nestedArray.length; row++) {
    for (var col = 0; col < 4; col++) {
      tempObject[nestedArray[0][col]] = nestedArray[row][col];
    }
    objRoster.push(tempObject);
    tempObject = {};
  }

  console.log(objRoster);

  return objRoster;
}

var object_roster = convert_roster_format(roster)

// console.log(object_roster[2])

// => { "Number": 31, "Name": "Harvey Kay", "Position": "Shooting Guard", "Points per Game": [0, 30, 16, 0, 25] }

// console.log(object_roster[0]["Name"] == "Joe Schmo")   // outputs true
