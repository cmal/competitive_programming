var assert = require('assert');
var should = require('chai').should()

describe ('1-1 add and sub', function() {
  var addAndSub = require('../1_1_addAndSub').addAndSub;
  describe ('#addAndSub()', function() {
    it ('2 1 3 should return 3', function() {
      addAndSub("2 1 3").should.equal(3);
    });
    it ('2 0 3 should return -1', function() {
      addAndSub("2 0 3").should.equal(-1);
    });
    it ('3 0 0 should return 0', function() {
      addAndSub("3 0 0").should.equal(0);
    });
    it ('1 2 -5 should return 10', function() {
      addAndSub("1 2 -5").should.equal(10);
    });
    it ('1 -2 5 should return -1', function() {
      addAndSub("1 -2 5").should.equal(-1);
    });
  });
});

describe ('1-2 erase max', function() {
  var eraseMax = require('../1_2_eraseMax').eraseMax;
  describe('#eraseMax()', function() {
    it ('1 3 2 should return 1 2', function() {
      eraseMax('3\n1 3 2').should.equal('1 2');
    });
    it ('4 1 4 2 4 3 4 should return 4 1 4 2 3 4', function() {
      eraseMax('7\n4 1 4 2 4 3 4').should.equal('4 1 4 2 3 4');
    });
    it ('1 1 1 4 1 4 2 4 3 4 should return 1 1 1 4 1 4 2 3 4', function() {
      eraseMax('10\n1 1 1 4 1 4 2 4 3 4').should.equal('1 1 1 4 1 4 2 3 4');
    });
  });
});


describe ('1-3 increment', function() {
  var increment = require('../1_3_increment').increment;
  describe('#increment()', function() {
    it ('1 should return 1', function() {
      increment('1').should.equal(1);
    });
    it ('9 should return 2', function() {
      increment('9').should.equal(2);
    });
    it ('9999 should return 5', function() {
      increment('9999').should.equal(5);
    });
    it ('19999 should return 5', function() {
      increment('19999').should.equal(5);
    });

    var million9 = '9'.repeat(1000000);
    it ('10^1E6 - 1 should return 1E6+1', function() {
      increment(million9).should.equal(1000001);
    });

    var million = '1' + '0'.repeat(1000000);
    it ('10^1E6 should return 1E6+1', function() {
      increment(million).should.equal(1000001);
    })
  });
});


describe ('1-4 straight flush', function() {
  var straightFlush = require('../1_4_straightFlush').straightFlush;
  describe('#straightFlush()', function() {
    it ('2D 5D 3D 4D 6D is straight flush', function() {
      straightFlush('2D 5D 3D 4D 6D').should.equal('YES');
    });
    it ('AD KH QH JS TC is NOT straight flush', function() {
      straightFlush('AD KH QH JS TC').should.equal('NO');
    });
    it ('9D KD JD QD TD is straight flush', function() {
      straightFlush('9D KD JD QD TD').should.equal('YES');
    });
    it ('AD KD JD QD TD is straight flush', function() {
      straightFlush('AD KD JD QD TD').should.equal('YES');
    });
    it ('AD KD JD QD 2D is NOT straight flush', function() {
      straightFlush('AD KD JD QD 2D').should.equal('NO');
    });
  });
});


describe('2-4 expression evaluation', function() {
  var expEval = require('../2_4_expEval').expEval;
  describe('#expEval()', function() {
    it ('1+2+3+4 is 10', function() {
      expEval('1+2+3+4').should.equal(10);
    });
    it ('1-2+3-4 is -2', function() {
      expEval('1-2+3-4').should.equal(-2);
    });
  });
});


describe('2-3 sum of minimums', function() {
  var sumOfMin = require('../2_3_sumOfMin').sumOfMin;
  describe('#sumOfMin()', function() {
    it ('3 1 2 3 is 16', function() {
      sumOfMin('3 1 2 3').should.equal(16);
    });
    it ('3 2 1 4 is 17', function() {
      sumOfMin('3 2 1 4').should.equal(17);
    });
    it ('1 2 3 4 is 20', function() {
      sumOfMin('1 2 3 4').should.equal(20);
    });
  });
});

describe('2-2 the king', function() {
  var theKing = require('../2_2_theKing').theKing;
  describe('#theKing()', function() {
    it ('1 2 is 1', function() {
      theKing('1 2').should.equal(1);
      theKing('2 1').should.equal(1);
    });
    it ('3 3 is 8', function() {
      theKing('3 3').should.equal(8);
    });
    it ('4 4 is 12', function() {
      theKing('4 4').should.equal(12);
    });
  });
});

describe('2-1 the cheapest permutation', function() {
  var cheapestPerm = require('../2_1_cheapestPerm').cheapestPerm;
  describe('#cheapestPerm()', function() {
    it ('3\n0 1 2\n1 0 4\n2 4 0 should correct', function() {
      cheapestPerm('3\n0 1 2\n1 0 4\n2 4 0').should.equal('2 1 3');
    });
    it ('4\n0 1 1 1\n1 0 1 1\n1 1 0 1\n1 1 1 0 should correct', function() {
      cheapestPerm('4\n0 1 1 1\n1 0 1 1\n1 1 0 1\n1 1 1 0').should.equal('1 2 3 4');
    });
  });
});
