// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-sonarqube-reporter'),
    ],
    client: {
      jasmine: {
      },
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      suppressAll: true // removes the duplicated traces
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/vuce-cp-ui-footer'),
      reports: ['lcovonly'],
      subdir: '.',
      reporters: [
        { type: 'lcov', subdir: 'report-lcov' },
        { type: 'lcovonly', subdir: '.', file: 'report-lcovonly.txt' },
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },
    reporters: ['progress', 'kjhtml', 'sonarqube'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadlessNoSandbox'],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: "ChromeHeadless",
        flags: ["--no-sandbox"]
      }
    },
    singleRun: false,
    restartOnFileChange: true,
    sonarqubeReporter: {
      basePath: 'src/app', // test files folder
      filePattern: '**/*spec.ts', // test files glob pattern
      encoding: 'utf-8', // test files encoding
      outputFolder: 'reports', // report destination
      legacyMode: false, // report for Sonarqube < 6.2 (disabled)
      reportName: function (metadata) {
        return 'sonarqube_report.xml';
      },
    },

  });


};
