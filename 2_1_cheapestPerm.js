exports.cheapestPerm = function(str) {
  var data = str.split('\n');

  // var rowCnt = +data[0];

  var table = data.slice(1).map(row => row.split(' ').map(d => +d));

  // permutation from 1 to n
}
