// Release 0 : tic_tac_toe Revisited - Populating a Board

// ------- RELEASE 0 ----------

function tic_tac_toe_board() {
  var xo_random = ["X","O","X","O","X","O","X","O","X"]
  //write your code here

  let tic_tac_toe = [["x","x","x"],["x","x","x"],["x","x","x"]]
  let xCount = 0, oCount = 0
  //cek jumlah x dan o 9, msing2 4 atau 5
  for (var i = 0; i < xo_random.length; i++) {
    if(xo_random[i].toLowerCase() === "x"){
      xCount++
    }else if(xo_random[i].toLowerCase() === "o"){
      oCount++
    }
  }
  //kalau hasil cek ok return arry tic_tac_toe else return false
  if(xCount >=4 && xCount <=5 && oCount >=4 && oCount <=5){
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        let xo = ~~(Math.random() * xo_random.length)
         let char = xo_random.splice(xo,1)
        tic_tac_toe[i][j] = char.join("")
      }
    }
    return tic_tac_toe
  }else{
    return false
  }

}

console.log(tic_tac_toe_board()) // => make a random tic tic board


// // ---- RELEASE 1 ---------
var roster = [["Number", "Name", "Position", "Points per Game"],
["12","Joe Schmo","Center",[14, 32, 7, 0, 23] ],
["9", "Ms. Buckets ", "Point Guard", [19, 0, 11, 22, 0] ],
["31", "Harvey Kay", "Shooting Guard", [0, 30, 16, 0, 25] ],
["7", "Sally Talls", "Power Forward ", [18, 29, 26, 31, 19] ],
["22", "MK DiBoux ", "Small Forward ", [11, 0, 23, 17, 0] ]]



// [[roster[0][0], roster[1][0]], [roster[0][1], roster[1][1]],...


function convert_roster_format(nestedArray) {
  // your convert code here
let converted_object = []
for (var i = 0; i < roster.length-1; i++) {
  let obj = {}
    obj[roster[0][0]] = roster[i+1][0]
    obj[roster[0][1]] = roster[i+1][1]
    obj[roster[0][2]] = roster[i+1][2],
    obj[roster[0][3]] = roster[i+1][3]

  converted_object.push(obj)
}
return converted_object
}


var object_roster = convert_roster_format(roster)
console.log(object_roster[2])

// => { "Number": 31, "Name": "Harvey Kay", "Position": "Shooting Guard", "Points per Game": [0, 30, 16, 0, 25] }

console.log(object_roster[0]["Name"] == "Joe Schmo")   // outputs true
