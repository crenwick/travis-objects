/*jshint node:true*/
'use strict';

var chai = require('chai');
var c = require('../server');
var expect = chai.expect;

describe('create a counter, check, increment, check', function() {
    it('create object', function() {
        expect(c.count).to.eql(0);
    });

    it('increment', function() {
        c.increment();
        expect(c.count).to.eql(1);
    });
});
