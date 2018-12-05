exports.theKing = function(str) {
  var nums = str.split(' ');
  var row = +nums[0];
  var col = +nums[1];
  return row * col - (Math.ceil(row / 3)) * (Math.ceil(col / 3));
}
