/*global module*/
module.exports = function (grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({
        qunit: {
            all: ['src/test/index.html']
        },
        lint: {
            all: ['Gruntfile.js', 'src/js/**/*.js']
        },
        jshint: {
            options: {
                bitwise: true,
                camelcase: true,
                curly: true,
                eqeqeq: true,
                forin: true,
                immed: true,
                indent: 4,
                latedef: true,
                newcap: true,
                noarg: true,
                noempty: true,
                nonew: true,
                plusplus: true,
                quotmark: true,
                regexp: true,
                undef: true,
                unused: true,
                strict: true,
                trailing: true
            }
        }
    });

    // default and alias tasks
    grunt.registerTask('test', 'qunit');
    grunt.registerTask('default', 'lint test');
};