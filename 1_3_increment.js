exports.increment = function(x) {
  // 0 <= x <= 10 ^ 1,000,000
  for (var i = x.length - 1; i >= 0; i --) {
    if (x[i] != '9')
      break;
  }

  if (i < 0) {
    return x.length + 1;
  } else {
    return x.length;
  }
}
