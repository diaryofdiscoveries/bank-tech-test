module.exports = function(config) {
  config.set({
    basePath: '',
    autoWatch: false,
    frameworks: ['jasmine'],
    files: [
      'src/*.js',
      'spec/*Spec.js'
    ],
    browsers: ['Chrome'],

    reporters: ['progress', 'coverage'],
    preprocessors: { 'src/*.js': ['coverage'] },

    singleRun: true
  });
};
