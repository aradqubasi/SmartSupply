//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'bower_components/jqlite/jqlite.1.1.1.min.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      '*.module.js',
      'components/**/*.module.js',
      'components/**/*.component.js',
      'view*/**/*.module.js',
      'view*/**/*.controller.js',
      'components/user-list/user-list.template.html',
      'components/**/*spec.js'
      //'components/user-list/user-list.template.html',
    ],

    preprocessors: {
      'components/user-list/user-list.template.html': 'ng-html2js'
    },

    ngHtml2JsPreprocessor: {
      stripPrefix: 'app/'
      //stripPrefix: '.*/SmartSupply/',
      //prependPrefix: '/app/'
    },
/*
    ngHtml2JsPreprocessor: {
      moduleName: 'templates'
    },
*/
    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    port: 9877,

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter',
      'karma-ng-html2js-preprocessor'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
