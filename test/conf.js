const config = {
  framework: 'mocha',
  mochaOpts: {
    reporter: 'spec',
    slow: 3000,
    timeout: 20000
  },
  specs: ['weather.js']
};

exports.config = config;
