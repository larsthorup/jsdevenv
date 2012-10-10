@echo off
pushd ..\..
if exist .\output\error.log del .\output\error.log

:: Note: run jslint
.\build\windows\lib\phantomjs.exe .\build\js\run-jslint.js

:: Note: show the output from jslint on interactive invocations
if exist .\output\error.log (type .\output\error.log && goto error)

popd
exit /b 0
:error
popd
exit /b 1