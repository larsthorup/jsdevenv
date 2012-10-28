@echo off
pushd ..\..
build\windows\lib\jscoverage.exe --no-instrument lib --no-instrument test/lib src output/src_instrumented
:: start output/source_instrumented/jscoverage.html?url=test/index.html
set URL=file:///%CD:\=/%/output/src_instrumented/jscoverage.html?url=test/index.html
"c:\Program Files (x86)\Mozilla Firefox\firefox.exe" %URL%
popd