module.exports = function(wallaby) {
  const babelCompiler = wallaby.compilers.babel();

  return {
    files: [
      'client/**/*.js',
      'server/**/*.js',
      'imports/**/*.js',
      '!imports/tests.js'
    ],
    tests: [
      'imports/tests.js'
    ],
    compilers: {
      '**/*.js': babelCompiler,
    },
    env: {
      type: 'node',
      params: {
        env: ['NODE_ENV=production'].join(';'),
      },
    },
    debug: true,
    testFramework: 'ava',

    setup: () => {
      console.debug = console.log;
      global.React = require('react');
    },
  };
};
