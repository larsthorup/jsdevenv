pushd `dirname $0`
./build/osx/lib/phantomjs build/js/run-lint.js
popd