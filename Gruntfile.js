/*global module*/
module.exports = function (grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({
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

    grunt.loadNpmTasks('grunt-junit');
    grunt.loadNpmTasks('grunt-buster');
    grunt.loadNpmTasks('grunt-qunit-cov');

    // default and alias tasks
    grunt.registerTask('coverage', 'qunit-cov');
    grunt.registerTask('test', 'junit');
    grunt.registerTask('default', 'lint test');
};