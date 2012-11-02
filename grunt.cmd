@echo off
setlocal
set PATH=%PATH%;node_modules\phantomjs\lib\phantom
set JUNIT_OUTPUT=output/testresults/
node_modules\.bin\grunt --config Gruntfile.js %*