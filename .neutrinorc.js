module.exports = {
  use: [
    // ['neutrino-preset-mozilla-frontend-infra/node-lint', {
    //   rules: {
    //     'no-underscore-dangle': 'off'
    //   }
    // }],
    // '@mozilla-frontend-infra/node-lint',
    // 'neutrino-preset-mozilla-frontend-infra/stage',
    ['@neutrinojs/library', {
      name: 'taskcluster',
      env: {
        NODE_ENV: 'development',
        MANIFEST_URL: 'http://references.taskcluster.net/manifest.json',
        TASKCLUSTER_ROOT_URL: 'https://taskcluster.net',
      },
      babel: {
        plugins: [
          require.resolve('@babel/plugin-proposal-object-rest-spread'),
          require.resolve('@babel/plugin-proposal-class-properties'),
        ],
      },
    }],
    (neutrino) => {
      if (process.env.NODE_ENV === 'test') {
        neutrino.config.devtool('inline-source-map');
      } else {
        neutrino.config.devtool('source-map');
        neutrino.config.externals({
          hawk: 'hawk',
          'query-string': {
            commonjs: 'query-string',
            commonjs2: 'query-string',
            amd: 'query-string',
            root: 'queryString'
          }
        });
      }

      neutrino.config.resolve.alias.set('hawk', 'hawk/dist/browser.js');
    },
    '@neutrinojs/karma',
  ],
};
