require('babel-core/register');
const merge = require('deepmerge');
const masterConf = require('../master.conf.js');
const prodConf = {
    specs: [
        './features/addSong.feature',
    ],

    capabilities: [
        {
            browserName: 'firefox',
            platform: 'Windows 10',
            version: '48',
            autoAcceptAlerts: true,
            maxInstances: '1',
            webdriverRemoteQuietExceptions: false,
            videoUploadOnPass: false,
            'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
            build: process.env.TRAVIS_BUILD_NUMBER,
        },
        {
            browserName: 'firefox',
            platform: 'OS X 10.11',
            version: '48',
            autoAcceptAlerts: true,
            maxInstances: '1',
            webdriverRemoteQuietExceptions: false,
            videoUploadOnPass: false,
            'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
            build: process.env.TRAVIS_BUILD_NUMBER,
        },
        {
            browserName: 'safari',
            platform: 'OS X 10.11',
            version: '9.0',
            screenResolution: "1600x1200",
            autoAcceptAlerts: true,
            maxInstances: '1',
            webdriverRemoteQuietExceptions: false,
            videoUploadOnPass: false,
            'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
            build: process.env.TRAVIS_BUILD_NUMBER,
        },
        {
            browserName: 'Chrome',
            platform: 'Windows 10',
            version: '53',
            screenResolution: "1280x1024",
            autoAcceptAlerts: true,
            maxInstances: '8',
            webdriverRemoteQuietExceptions: false,
            videoUploadOnPass: false,
            'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
            build: process.env.TRAVIS_BUILD_NUMBER,
        },
        {
            browserName: 'Chrome',
            platform: 'OS X 10.11',
            version: '53',
            screenResolution: "1600x1200",
            autoAcceptAlerts: true,
            maxInstances: '1',
            webdriverRemoteQuietExceptions: false,
            videoUploadOnPass: false,
            'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
            build: process.env.TRAVIS_BUILD_NUMBER,
        },

        {
            browserName: 'internet explorer',
            platform: 'Windows 10',
            version: '11.103',
            autoAcceptAlerts: true,
            maxInstances: '8',
            webdriverRemoteQuietExceptions: false,
            videoUploadOnPass: false,
            'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
            build: process.env.TRAVIS_BUILD_NUMBER,
        },
    ],
    logLevel: 'error',
    services: ['sauce'],
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    sauceConnect: true,
    reporters: ['dot', 'spec', 'junit'],
    reporterOptions: {
        junit: {
            outputDir: './reports/junit/',
        },
    },
};
exports.config = merge(masterConf.config, prodConf);
