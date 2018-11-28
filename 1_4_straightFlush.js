exports.straightFlush = function(str) {
  var arr = str.split(' ');

  var ranks = [arr[0][0]];
  var currSuit = arr[0][1];

  for (var i = 1; i < 5; i ++) {
    if (currSuit != arr[i][1]) {
      return 'NO';
    }
    ranks.push(arr[i][0]);
  }

  if (isStraight(ranks.sort(compareRanks)))
    return 'YES';

  return 'NO';
}

var nextRank = function (rank) {
  switch(rank) {
  case '2': case '3': case '4': case '5':
  case '6': case '7': case '8':
    return (+rank + 1).toString();
  case '9':
    return 'T';
  case 'T':
    return 'J';
  case 'J':
    return 'Q';
  case 'Q':
    return 'K';
  case 'K':
    return 'A';
  case 'A': // make sortedRank[i] != nextRank(sortedRank[i - 1])
    return null;
  }
}

var ranks = ['2', '3', '4', '5', '6',
             '7', '8', '9', 'T', 'J',
             'Q', 'K', 'A'];

var compareRanks = function (rankA, rankB) {
  return ranks.indexOf(rankA) - ranks.indexOf(rankB);
}

var isStraight = function (sortedRanks) {
  // The following is commented out because nextRank('A') will return null
  // if (sortedRanks.indexOf('2') != -1 && sortedRanks.indexOf('A') != -1)
  //   return false;
  for (var i = 1; i < sortedRanks.length; i ++) {
    if (sortedRanks[i] != nextRank(sortedRanks[i - 1]))
      return false;
  }
  return true;
}
