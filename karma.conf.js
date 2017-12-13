module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],
        files: [
            'angular.js',
            'angular-mocks.js',
            'app.js',
            'app.service.js',
            'test/*.spec.js'
        ],
        browsers: ['Chrome']
    })
};