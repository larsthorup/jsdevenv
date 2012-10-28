var config = {
    filepaths: [
		'src/'
	],
	exclusions: [
		'src/lib/',
        'src/test/lib/'
	],
	jsLint: './build/lib/jslint.js',
	lintOptions: {
        white: false // sloppy whitespace not tolerated
        // ToDo: figure out how to "use strict"; together with require.js
        // sloppy: false // force "use strict"; pragma
    },
	verbose: false,
	stopOnFirstError: false,
	logFile: './output/error.log'
};

phantom.injectJs('./build/lib/PhantomLint.js');
PhantomLint.init(config);
