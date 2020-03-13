let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
//will adjust depending on selecte size
let width = 76;
//creates new array with the "width" as the amount of elements
let map = new Array(width);
//generates map on start up
tileGen();

//on click generates map data
document.getElementById("genBtn").onclick = tileGen;

//tile generator
function tileGen() {
  //clears last generated map
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //loops through the x axis of the map array
  for (let x = 0; x < map.length; x++) {
    //creates new array at each index (map[x])
    map[x] = new Array(width);
    //loops through the y axis of the new map[x] array
    for (let y = 0; y < map[x].length; y++) {
      //assigns random color to each map index (map[x][y])
      map[x][y] = "#" + Math.floor(Math.random() * 16777215).toString(16);
    }
  }
  render();
}

//tile renderer
function render() {
  for (let x = 0; x < map.length; x++) {
    // loops through total number of 16x16 tiles needed to fill X axis --- rows
    for (let y = 0; y < map[x].length; y++) {
      //to be replaced with sprites
      ctx.fillStyle = map[x][y];
      ctx.fillRect(x * 16, y * 16, 16, 16);
    }
  }
}
