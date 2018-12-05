exports.sumOfMin = function(strs) {
  var arr = strs.split(' ').map(a => +a);
  var res = 0;
  for (var i = 0; i < arr.length; i ++) {
    var tmpLeft = 0;
    for (var j = 0; j < i; j ++) {
      if (arr[j] > arr[i]) {
        tmpLeft ++;
      }
    }
    var tmpRight = 0;
    for (var j = i + 1; j < arr.length; j ++) {
      if (arr[j] >= arr[i]) {
        tmpRight ++;
      }
    }
    res += (tmpLeft + 1) * (tmpRight + 1) * arr[i];
  }
  return res;
}
