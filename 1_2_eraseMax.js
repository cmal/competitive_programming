exports.eraseMax = function(str) {
  // erase the unique max, or the third max.
  // it is guaranteed that the input array A has either a unique maximum element
  // or AT LEAST 3 maximum element.
  var a = str.split('\n');
  var count = +a[0];
  var arr = a[1].split(' ').map(function(s) { return +s; });

  var max = arr[0];
  var maxIndex = 0;
  var maxHit = 1;

  for (var i = 1; i < count; i ++) {
    if (arr[i] == max) {
      maxHit ++;
      if (maxHit <= 3) {
        maxIndex = i;
      }
    } else if (arr[i] > max) {
      max = arr[i];
      maxIndex = i;
      maxHit = 1;
    }
  }

  arr.splice(maxIndex, 1);
  return arr.join(' ');
}
