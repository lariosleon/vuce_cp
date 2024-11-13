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
            require('karma-coverage-istanbul-reporter'),
            require('karma-junit-reporter'),
            require('@angular-devkit/build-angular/plugins/karma'),
            require('karma-mocha-reporter'),
            require('karma-coverage'),
            require('karma-sonarqube-reporter')
        ],
        sonarqubeReporter: {
            basePath: 'src/app',
            filePattern: '**/*.spec.ts',
            encoding: 'utf-8',
            outputFolder: 'reports',
            legacyMode: false,
            reportName: (metadata) => {
                return metadata.concat('xml').join('.');
            }
        },
        client: {
            jasmine: {
                timeoutInterval: 15000
            },
            clearContext: false
        },
        coverageIstanbulReporter: {
            dir: './coverage/istanbul',
            reports: ['html', 'lcovonly', 'text-summary'],
            fixWebpackSourcePaths: true
        },
        junitReporter: {
            outputDir: './coverage/junit',
            outputFile: './report.xml',
            suite: '',
            useBrowserName: false,
            properties: {},
            xmlVersion: null
        },
        reporters: ['mocha', 'coverage-istanbul', 'junit', 'sonarqube'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ["ChromeHeadlessNoSandbox"],
        customLaunchers: {
            ChromeHeadlessNoSandbox: {
                base: "ChromeHeadless",
                flags: [
                    "--no-sandbox",
                    "--disable-setuid-sandbox",
                    "--user-data-dir=/tmp/chrome-test-profile",
                    "--disable-web-security",
                    "--remote-debugging-address=0.0.0.0",
                    "--remote-debugging-port=9222",
                ],
                debug: true,
            },
        },
        singleRun: false,
        restartOnFileChange: true,
        browserDisconnectTimeout: 60000,
        browserDisconnectTolerance: 3,
        browserNoActivityTimeout: 30000,
    });
};