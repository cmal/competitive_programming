exports.cheapestPerm = function(str) {
  var data = str.split('\n');
  var rowCnt = +data[0];
  var table = new Array(rowCnt).fill(new Array(rowCnt).fill(0));
  for (var i = 0; i < rowCnt; i ++) {
    table[i] = data[i+1].split(' ').map(function(d) {return +d;});
  }

  // permutation from 1 to n
}
