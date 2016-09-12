const config = {
  framework: 'mocha',
  mochaOpts: {
    reporter: 'spec',
    slow: 3000,
    timeout: 20000
  },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  // browserstackUser: 'aslkfh',
  // browserstackKey: 'lkasdhgfj',
  specs: ['home.js']
};

export { config };
