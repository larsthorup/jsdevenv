/*global module*/
module.exports = function (grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({
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

    // Default task.
    grunt.registerTask('default', 'lint');

};