exports.sumOfMin = function(strs) {
  // O(n^2)
  var arr = strs.split(' ').map(a => +a);
  var res = 0;
  for (var i = 0; i < arr.length; i ++) {
    var tmpLeft = 1;
    var tmpRight = 1;
    for (var j = i - 1; j >= 0; j --) {
      if (arr[j] > arr[i]) {
        tmpLeft ++;
      } else {
        break;
      }
    }
    for (var j = i + 1; j < arr.length; j ++) {
      if (arr[j] >= arr[i]) {
        tmpRight ++;
      } else {
        break;
      }
    }
    res += tmpLeft * tmpRight * arr[i];
  }
  return res;
}
