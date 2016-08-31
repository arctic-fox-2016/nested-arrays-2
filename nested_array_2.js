// Release 0 : Tic-tac-toe Revisited - Populating a Board

// ------- RELEASE 0 ----------

function tic_tac_toe_board() {
  var xo_random = ["X","O","X","O","X","O","X","O","X"]
  //write your code here
  var tic_tac_toe = [];
  var random_idx = 0;

  // Function to check value tic_tac_toe - start
  let x_total = o_total = 0;
  // line to check xo_random length exactly 9 or not
  if(xo_random.length != 9) return "Tic Tac Toe Error #1";

  // line to check xo_random value 'x' and '0' have the same count / difference
  for(let x = 0; x < xo_random.length; x++){
    if(xo_random[x] == "X") x_total += 1;
    else if(xo_random[x] == "O") o_total += 1;
  }
  if(!((x_total == 5 && o_total == 4) || (x_total == 4 && o_total == 5))) return "Tic Tac Toe Error #2";
  // Function to check value tic_tac_toe - end

  // Function to suffle array - start
  function suffle_array(){
    for(let x = 0; x < xo_random.length; x++){
      // line code to get random position
      let temp_index = Math.floor((Math.random() * xo_random.length));

      // line code to swap value
      let temp_value = xo_random[temp_index];
      xo_random[temp_index] = xo_random[x];
      xo_random[x] = temp_value;
    }
  }
  suffle_array();
  // Function to suffle array - end

  for(let x = 0; x < 3; x++){
    tic_tac_toe[x] = [];
    for(let y = 0; y < 3; y++){
      tic_tac_toe[x][y] = xo_random[random_idx];
      random_idx += 1;
    }
  }
  return tic_tac_toe;
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
  let object_roster = [];
  let object_index = 0;
  for(let x = 1; x < nestedArray.length; x++){
    object_roster[object_index] = {};
    for(let y = 0; y < nestedArray[x].length; y++){
      object_roster[object_index][nestedArray[0][y]] = nestedArray[x][y];
    }
    object_index += 1;
  }
  return object_roster;
}

var object_roster = convert_roster_format(roster)
console.log(object_roster[2])

// => { "Number": 31, "Name": "Harvey Kay", "Position": "Shooting Guard", "Points per Game": [0, 30, 16, 0, 25] }

console.log(object_roster[0]["Name"] == "Joe Schmo")   // outputs true
