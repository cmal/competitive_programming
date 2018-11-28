exports.addAndSub = function(str) {
  var a = str.split(' ');
  var x = +a[0];
  var y = +a[1];
  var z = +a[2];
  
  if (z == 0) return 0;

  var curr = 0;
  var flag = false;

  for (var i = 1; ; i ++) {
    if (i % 2 == 0) { // 2, 4, ...
      curr -= y;
      if (curr == z) return i;
      if (((x > y && curr > z) ||
           (x < y && curr < z)) && flag)
        return -1;
    } else { // 1, 3, ...
      curr += x;
      if (curr == z) return i;
      if ((x > y && curr > z) || (x < y && curr < z))
        flag = true;
    }
  }
}
