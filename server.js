/*jshint node:true*/
'use strict';

var Counter = function() {
    this.count = 0;
};

Counter.prototype = {
    increment: function() {
        this.count++;
    }
};

var c = new Counter();
module.exports = c;
