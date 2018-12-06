// exports.cheapestPerm = function(input) {
//   var data = input.split('\n');

//   var rowCnt = +data[0];

//   var adjMatrix = data.slice(1).map(row => row.split(' ').map(d => +d));

//   var edges = []; // edges chosen

//   // permutation from 1 to n

//   // Kruskal's Algo

//   // 1. sort all edges by weights
//   for (var i = 0; i < rowCnt; i ++) {
//     for (var j = i + 1; j < rowCnt; j ++) {
//       edges.push({
//         weight: adjMatrix[i][j],
//         row: i,
//         col: j
//       });
//     }
//   }
//   edges.sort(function(a, b) {
//     return a.weight - b.weight;
//   });

//   console.log(edges);

//   // 2. add leastest weight edge that does not form a circuit into the answer set
//   //    we use union-find here:
//   //    ref: https://www.geeksforgeeks.org/union-find/
//   var parent = new Array(rowCnt).fill(-1);

//   function union(i, j) {
//     // union i to j's tree, will fail if i and j have same parents.
//     // return false when failed
//     // return true when success
//     console.log('union i j ', i, j);
//     console.log('find i j ',i, ':', find(i), j, ':', find(j));
//     // console.log('parent', parent);
//     if (find(i) == find(j)) {
//       return false;
//     }

//     if (parent[i] == -1)
//       parent[i] = j;
//     else
//       parent[j] = i;
//     console.log(parent)
//     return true;
//   }

//   function find(i) {
//     var j = i;
//     while(parent[j] != -1) {
//       j = parent[j]; // j = -1 if no parent
//       if (j == i)
//         break;
//     }
//     return j;
//   }

//   var arr = [];
//   for (var i = 0; i < edges.length; i ++) {
//     if (union(edges[i].row, edges[i].col)) {
//       arr.push(edges[i].row + 1);
//     }
//   }

//   return arr.join(' ');
// }


var cheapestPerm = function(input) {

  // This is a TSP, NP-hard
  
  var data = input.split('\n');

  var rowCnt = +data[0];

  var adjMatrix = data.slice(1).map(row => row.split(' ').map(d => +d));
  // console.log(adjMatrix);

  var getCost = function(perm) {
    // console.log('perm', perm);
    var cost = 0;
    for (var i = 0; i < perm.length - 1; i ++) {
      cost += adjMatrix[perm[i]][perm[i + 1]];
      // console.log('cost+', perm[i], perm[i+1],adjMatrix[perm[i]][perm[i + 1]]);
    }
    // console.log('cost: ', perm, cost);
    return cost;
  }

  var origin = [];
  
  for (var i = 0; i < rowCnt; i ++) {
    origin.push(i);
  }

  // get permutation
  var np = origin;
  var cheapestPm = np;
  var cheapestCost = getCost(np);
  while(np = nextPerm(np)) {
    var cost = getCost(np);
    if (cheapestCost > cost) {
      cheapestPm = np;
      cheapestCost = cost;
    }
  }

  return cheapestPm.map(a => a + 1).join(' ');

}

// cheapestPerm('3\n0 1 2\n1 0 4\n2 4 0')

var nextPerm = function(currPerm) {
  var i = currPerm.length - 1;
  for (; i > 0; i --) {
    if (currPerm[i] > currPerm[i - 1]) break;
  }
  if (!i) return false;

  // find the min one which is larger than currPerm[i-1]
  var swapIndex = i - 1;
  var minIndex = i;
  for (var j = i; j < currPerm.length; j ++) {
    if (currPerm[j] > currPerm[swapIndex] && currPerm[j] < currPerm[minIndex])
      minIndex = j;
  }

  // console.log("minIndex, swapIndex: ", minIndex, swapIndex);

  // swap i-1, minIndex
  // copy before i in order
  // copy i and after i in reverse order
  
  var next = [];
  for (var k = 0; k < currPerm.length; k ++) {
    if (k < swapIndex) {
      // console.log('k < swapIndex')
      next.push(currPerm[k]);
    } else if (k == swapIndex) {
      // console.log('k == swapIndex')
      next.push(currPerm[minIndex]);
    } else if (k == swapIndex + (currPerm.length - minIndex)) {
      next.push(currPerm[swapIndex]);
    } else {
      // console.log('else')
      next.push(currPerm[currPerm.length - 1 - (k - i)]);
    }
    // console.log(next);
  }
  return next;
}

exports.cheapestPerm = cheapestPerm;
