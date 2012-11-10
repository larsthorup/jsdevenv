/*global module*/
module.exports = function (grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({
        requirejs: {
            name: 'main',
            dir: 'output/bundle',
            appDir: 'src',
            baseUrl: 'js',
            paths: {
                jquery: '../lib/jquery'
            }
        },
        'qunit-cov': {
            test:
            {
                minimum: 0.99,
                baseDir: 'src',
                srcDir: 'src/js',
                depDirs: ['src/lib', 'src/test'],
                outDir: 'output/coverage',
                testFiles: ['src/test/index.html']
            }
        },
        watch: {
            scripts: {
                files: 'src/**/*.*',
                tasks: 'lint qunit'
            }
        },
        qunit: {
            src: ['src/test/index.html'],
            bundle: ['output/bundle/test/index.html']
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

    grunt.loadNpmTasks('grunt-junit');
    grunt.loadNpmTasks('grunt-qunit-cov');
    grunt.loadNpmTasks('grunt-requirejs');

    // default and alias tasks
    grunt.registerTask('test-bundle', 'qunit:bundle');
    grunt.registerTask('bundle', 'requirejs');
    grunt.registerTask('coverage', 'qunit-cov');
    grunt.registerTask('test', 'junit:env qunit:src');
    grunt.registerTask('default', 'lint test');
};