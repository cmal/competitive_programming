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

