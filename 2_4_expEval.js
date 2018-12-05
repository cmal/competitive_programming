exports.expEval = function(exp) {
  var res = 0;
  var cnt = 0;
  var num = 0;
  var flag = true; // true for +, false for -

  for (var i = 0; i < exp.length; i ++) {
    switch(exp[i]) {
    case '+':
      acc();
      flag = true;
      num = 0;
      break;
    case '-':
      acc();
      flag = false;
      num = 0;
      break;
    default:
      num = num * 10 + (+exp[i]);
    }
  }

  function acc() {
    if (flag) {
      res += num;
    } else {
      res -= num;
    }
  }
  acc();
  
  return res;
}
