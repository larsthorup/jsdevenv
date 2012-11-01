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
        buster: {
            test: {
                config: 'path/to/my/buster.js'
            },
            server: {
                port: 1111
            }
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

    grunt.loadNpmTasks('grunt-buster');

    // default and alias tasks
    grunt.registerTask('test', 'qunit');
    grunt.registerTask('default', 'lint test');
};