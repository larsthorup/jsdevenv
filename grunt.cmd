@echo off
setlocal
set PATH=%PATH%;node_modules\phantomjs\lib\phantom;build\jscoverage-0.5.1
set JUNIT_OUTPUT=output/testresults/
node_modules\.bin\grunt --config Gruntfile.js %*