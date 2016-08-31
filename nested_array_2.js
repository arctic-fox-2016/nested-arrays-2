// Release 0 : Tic-tac-toe Revisited - Populating a Board

// ------- RELEASE 0 ----------
/*
function tic_tac_toe_board() {
var xo_random = ["X","O","X","O","X","O","X","O","X"]
//write your code here
var chunk = 3;
var ticTable = [];
for (var i=0;i< xo_random.length;i+=chunk)
{
ticTable.push(xo_random.slice(i,i+chunk))
}
console.log(ticTable);

}

console.log(tic_tac_toe_board()) // => make a random tic tic board
*/

// ---- RELEASE 1 ---------
var roster = [["Number", "Name", "Position", "Points per Game"],
["12","Joe Schmo","Center",[14, 32, 7, 0, 23] ],
["9", "Ms. Buckets ", "Point Guard", [19, 0, 11, 22, 0] ],
["31", "Harvey Kay", "Shooting Guard", [0, 30, 16, 0, 25] ],
["7", "Sally Talls", "Power Forward ", [18, 29, 26, 31, 19] ],
["22", "MK DiBoux ", "Small Forward ", [11, 0, 23, 17, 0] ]]



let arrPlayer = [];

class Player {
  constructor(number,name,position,pointsPerGame){
    this.number = number;
    this.name = name;
    this.position = position;
    this.pointsPerGame = pointsPerGame;
  }
}

arrPlayer.push(new Player(roster[1][0],roster[1][1],roster[1][2],roster[1][3]));
arrPlayer.push(new Player(roster[2][0],roster[2][1],roster[2][2],roster[2][3]));
arrPlayer.push(new Player(roster[3][0],roster[3][1],roster[3][2],roster[3][3]));
arrPlayer.push(new Player(roster[4][0],roster[4][1],roster[4][2],roster[4][3]));

console.log(roster);
console.log(arrPlayer)
console.log(arrPlayer[0].name == "Joe Schmo");

/*
function convert_roster_format(number,names,position,pointsPerGame) {
for (var i=0; i<roster.length; i++) {

}


}

var object_roster = convert_roster_format(roster)

console.log(convert_roster_format(roster[5][0],roster[5][1],roster[5][2],roster[5][3]));


// [[roster[0][0], roster[1][0]], [roster[0][1], roster[1][1]],...

/*


var object_roster = convert_roster_format(roster)
console.log(object_roster[2])
*/
// => { "Number": 31, "Name": "Harvey Kay", "Position": "Shooting Guard", "Points per Game": [0, 30, 16, 0, 25] }

//console.log(object_roster[0]["Name"] == "Joe Schmo")   // outputs true
