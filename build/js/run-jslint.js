var config = {
    filepaths: [
		'src/'
	],
	exclusions: [
		'src/lib/'
	],
	jsLint: './build/lib/jslint.js',
	lintOptions: {},
	verbose: false,
	stopOnFirstError: false,
	logFile: './output/error.log'
};

phantom.injectJs('./build/lib/PhantomLint.js');
PhantomLint.init(config);
