exports.cheapestPerm = function(input) {
  var data = input.split('\n');

  var rowCnt = +data[0];

  var adjMatrix = data.slice(1).map(row => row.split(' ').map(d => +d));

  var edges = []; // edges chosen

  var starts = new Array(rowCnt);
  
  // permutation from 1 to n

  // Kruskal's Algo

  // 1. sort all weights

  // 2. add leastest weight edge that does not form a circuit into answer set

  
}
