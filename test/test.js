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
