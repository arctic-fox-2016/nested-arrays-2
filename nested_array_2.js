// Release 0 : Tic-tac-toe Revisited - Populating a Board

// ------- RELEASE 0 ----------
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function tic_tac_toe_board() {
  let xo_random = ["X","O","X","O","X","O","X","O","X"]
  var gameResult = [["X","X","X"],["X","O","X"],["O","O","O"]]
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      var x = getRandomIntInclusive(0,xo_random.length - 1);
      let y = xo_random.splice(x,1)
      gameResult[i][j]= y[0];
    }
  }
  return gameResult
}


console.log(tic_tac_toe_board()) // => make a random tic tic board

//
// // ---- RELEASE 1 ---------
var roster = [["Number", "Name", "Position", "Points per Game"],
["12","Joe Schmo","Center",[14, 32, 7, 0, 23] ],
["9", "Ms. Buckets ", "Point Guard", [19, 0, 11, 22, 0] ],
["31", "Harvey Kay", "Shooting Guard", [0, 30, 16, 0, 25] ],
["7", "Sally Talls", "Power Forward ", [18, 29, 26, 31, 19] ],
["22", "MK DiBoux ", "Small Forward ", [11, 0, 23, 17, 0] ]]



// [[roster[0][0], roster[1][0]], [roster[0][1], roster[1][1]],...


var object_roster = []
function rosterObject(number, nama, position, points) {
    object_roster[object_roster.length] = {
      Number : number,
      Name : nama,
      Position : position,
      Points_per_Game : points
    };
};

function convert_roster_format(nestedArray) {
  for(var i=1;i<=5;i++){
    rosterObject(nestedArray[i][0],nestedArray[i][1],nestedArray[i][2],nestedArray[i][3])
  }
  return object_roster
}
// your convert code here

var object_roster = convert_roster_format(roster)

console.log(object_roster[2])
// => { "Number": 31, "Name": "Harvey Kay", "Position": "Shooting Guard", "Points per Game": [0, 30, 16, 0, 25] }
console.log(object_roster[0]["Name"]=="Joe Schmo")//outputs true
