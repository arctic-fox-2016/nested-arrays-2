// Release 0 : Tic-tac-toe Revisited - Populating a Board

// ------- RELEASE 0 ----------

function createChunk(){
  chunk = []
  for (var j=0; j<=2;j++){
    if (Math.random() < 0.5){
      chunk[j] = "X"
    } else {
      chunk[j] = "O"
    }
  }
  return chunk;
}


function tic_tac_toe_board() {
  //write your code here
  var board = [];
  var chunk = []
  for (var i=0; i<=2;i++){
    board.push(createChunk())
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

function createList (index){
  var pemain = { "Number": roster[index][0], "Name": roster[index][1], "Position": roster[index][2], "Points per Game": roster[index][3]}
  return pemain
}
function convert_roster_format(nestedArray) {
  // your convert code here
  let listPemain = []
  for (i=1;i<=5;i++){
    listPemain.push(createList(i))
  }
  return listPemain
}


var object_roster = convert_roster_format(roster)
console.log(object_roster[2])

// => { "Number": 31, "Name": "Harvey Kay", "Position": "Shooting Guard", "Points per Game": [0, 30, 16, 0, 25] }

console.log(object_roster[0]["Name"] == "Joe Schmo")   // outputs true
