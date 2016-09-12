const dest = './dest';
const src = './src';

module.exports = {
  browserSync: {
    server: {
      baseDir: [dest, src]
    },
    port: 3005,
    ui: {
      port: 3010
    },
    files: [
      `${dest}/**'`
    ]
  },

  markup: {
    src: `${src}/index.html`,
    less: `${src}/styles/**`,
    imgs: `${src}/img/**`,
    dest
  },

  browserify: {
    debug: true,
    bundleConfigs: [{
      entries: `${src}/index.jsx`,
      dest: `${dest}/js`,
      outputName: 'app.js'
    }],
    extensions: ['.jsx']
  },

  babel: {
    presets: ['latest', 'react']
  }

};
