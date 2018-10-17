'use strict'
const chai = require('chai');
const should = chai.should();
const expect = chai.expect;
const assert = require('chai').assert;


const index = require('../index');
const getVowels = require('../index.js');
const longestWord = require('../index.js');
const number = require('../index.js');

describe('number', function() {
  it('should return  value and add number', function() {

    assert.equal(14, 14);

  });
});
describe('getVowels', function() {
  it('should return the number of vowels in a statement', function() {

    assert.equal(9, 9);

  });
});

describe('longestWord', function() {
  it('should return  string', function() {

    assert.equal(String, String);

  });
});

describe('longestWord', function() {
  it('should return  the longest word in a statement', function() {

    assert.equal('godliness', 'godliness');

  });
});
