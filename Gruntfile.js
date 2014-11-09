/*jshint node:true*/
'use strict';

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-simple-mocha');
    grunt.loadNpmTasks('grunt-jscs');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jscs: {
            src: ['server.js'],
            options: {
                config: '.jscsrc'
            }
        },

        jshint: {
            options: {
                node: true
            },
            src: ['server.js']
        },

        simplemocha: {
            src: ['test/**/*.js']
        }
    });

    grunt.registerTask('test', ['jshint', 'jscs', 'simplemocha']);
    grunt.registerTask('default', ['test']);
};
