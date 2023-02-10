module.exports = function (config) {
    config.set({
      basePath: 'src',
      browsers: ['Chrome'],
      //'phantomjs-shim'
      frameworks: ['jasmine', 'karma-typescript'],
      files: [
        '*.html',
        'https://code.jquery.com/jquery-3.6.3.min.js',
        '**/*.ts' // *.tsx for React Jsx
      ],

      html2JsPreprocessor: {
        // strip this from the file path
        stripPrefix: 'public/',
  
        // prepend this to the file path
        prependPrefix: 'served/',
  
        // or define a custom transform function
        processPath: function(filePath) {
          // Drop the file extension
          return filePath.replace(/\.html$/, '');
        }
      },

      preprocessors: {
        '**/*.ts': ['karma-typescript'],
        '**/*.html':['html2js']
      },
      karmaTypescriptConfig: {
        compilerOptions: {
          noImplicitAny: true,
          noImplicitReturns: true,
          noImplicitThis: true,
          allowSyntheticDefaultImports: true,
          // Compilation target is ES5 but some ES2015 features are enabled using shim.
          // Tell the compiler that those newer features are available.
          lib: ['DOM', 'ES6', 'ScriptHost']
        }
      },
      reporters: ['progress', 'karma-typescript'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: false,
      singleRun: true,
      concurrency: Infinity
    })
  }