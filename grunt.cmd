@echo off
setlocal
set PATH=%PATH%;node_modules\phantomjs\lib\phantom
node_modules\.bin\grunt --config Gruntfile.js %*