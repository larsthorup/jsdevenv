jsdevenv
========

Creating a build environment for JavaScript projects.

Prerequisites:

* install node.js

then

    npm install


From the browser
----------------

run all tests

    file://(path-to)/src/test/index.html


From the command line
---------------------

continuously lint and test on every save

    grunt watch

perform static analysis

    grunt lint

run all tests

    grunt test

produce test coverage statistics (in output\coverage\out\coverage.html)

    grunt coverage