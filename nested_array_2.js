// Release 0 : Tic-tac-toe Revisited - Populating a Board

// ------- RELEASE 0 ----------

function tic_tac_toe_board() {
  var xo_random = ["X","O","X","O","X","O","X","O","X"]
  //write your code here
  var tictactoeBoard = [["","",""],
                        ["","",""],
                        ["","",""]]

  for(var i=0;i<3;i++){
    for(var y=0;y<3;y++){
      var randomPosX = Math.floor(Math.random()*xo_random.length/3)+0;
      var randomPosY = Math.floor(Math.random()*xo_random.length/3)+0;
      var randomXO = Math.floor(Math.random()*xo_random.length);

      tictactoeBoard[i][y] = xo_random[randomXO];
      delete randomPosX;
      delete randomPosY;
    }
  }

  console.log(tictactoeBoard);

}
tic_tac_toe_board();

//console.log(tic_tac_toe_board()) // => make a random tic tic board
// ---- RELEASE 1 ---------
var roster = [["Number", "Name", "Position", "Points per Game"],
["12","Joe Schmo","Center",[14, 32, 7, 0, 23] ],
["9", "Ms. Buckets ", "Point Guard", [19, 0, 11, 22, 0] ],
["31", "Harvey Kay", "Shooting Guard", [0, 30, 16, 0, 25] ],
["7", "Sally Talls", "Power Forward ", [18, 29, 26, 31, 19] ],
["22", "MK DiBoux ", "Small Forward ", [11, 0, 23, 17, 0] ]]


function convert_roster_format(object_roster) {
  object_roster = [];
  for (var i = 0; i < roster.length; i++){
    object_roster[i]={};
    for(var y=0;y<roster[i].length;y++){
      if(y==0) object_roster[i].Number = roster[i][y]
      else if(y==1)object_roster[i].Name = roster[i][y]
      else if(y==2)object_roster[i].Position = roster[i][y]
      else if(y==3)object_roster[i].Point = roster[i][y]
    //nestedArray[i] = object_roster[i];
  //return object_roster;
}
}
}

var object_rosters = convert_roster_format(object_roster)
console.log(object_rosters[2])

// => { "Number": 31, "Name": "Harvey Kay", "Position": "Shooting Guard", "Points per Game": [0, 30, 16, 0, 25] }

//console.log(object_roster[0]["Name"] == "Joe Schmo")   // outputs true
